//Controller -> untuk mengatur jalur komunikasi request dan response.
//Controller dipasang di router

import { Request, Response } from "express";
import { EmployeeService } from "../services/employee.service";
import { errorHandler } from "../helpers/errorHandler";
import { handleSuccess } from "../helpers/responseHandler";

export class EmployeeController {
  private employeeService: EmployeeService;
  
  constructor() {
    this.employeeService = new EmployeeService();
  }

  public async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      
      // The incorrect validation was commented out, so it's removed in this fixed version.
      // If you need validation, it should be adjusted to match your URL format.

      const result = await this.employeeService.getById(Number(id));
      handleSuccess(res, result, 'Successfully get specific data of employee', 200);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const {page = 1, limit = 10, role, department, sort ='ASC', search } =req.query
      const result = await this.employeeService.getAll({
        page: Number(page),
        limit: Number(limit),
        role: role as string,
        department: department as string,
        sort: sort as string,
        search: search as string
      });
      handleSuccess(res, result, 'Successfully Get All Employees');
    } catch (error) {
      errorHandler(res, error);
    } 
  }

  public async create (req: Request, res: Response): Promise<void> {
    try {
      const { name, department, role } = req.body;
      const result = await this.employeeService.create({ name, department, role });
      handleSuccess(res, result, 'Successfully created employee');
      
      
    } catch (error) {
      errorHandler(res, error);
      
    }
  }

  public async softDelete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const result = await this.employeeService.softDelete(Number(id));
      handleSuccess(res, result, 'Successfully soft-deleted an employee');
      
    } catch (error) {
      errorHandler(res, error);
    }
  }

  public async hardDelete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const result = await this.employeeService.hardDelete(Number(id));
      handleSuccess(res, result, 'Successfully hard-deleted an employee');
    } catch (error) {
      errorHandler(res, error);
    }
  }
}
