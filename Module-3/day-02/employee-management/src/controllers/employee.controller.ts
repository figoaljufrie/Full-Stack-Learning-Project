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
  try{
  const { id } = req.params;

  if (!id.includes('MOX-')) {
   res.json({
    status: 400,
    message: "ID is required"
   });
   return;
  }

  const result = await this.employeeService.getById(id);
  handleSuccess(res, result, 'Successfully get specific data of employee', 200);
   // res.status(200).json({
   //   status: 200,
   //   data: result
   //  //   message: 'Success'
  } catch (error) {
     errorHandler(res, error);
    // res.status(500).json({
    //   status: 500,
    //   message: "Internal Server Error"
    // });
    // return;
  }
 }

 public async getAll(req: Request, res: Response) {
  try {
    const { role, division, search, page = '1', limit = '10' } = req.query;
    const pageNumber = parseInt(page as string, 10);
    const limitNumber = parseInt(limit as string, 10);
   const result = await this.employeeService.getAll(
    {
      role: typeof role === 'string' ? role : undefined,
      division: typeof division === 'string' ? division : undefined,
      search: typeof search === 'string' ? search : undefined,
    },
    pageNumber,
    limitNumber
   )
   handleSuccess(res, result, 'Successfully get datas of all employees', 200);
   // res.status(200).json({
   //   status: 200,
   //   data: result
   //  //   message: 'Success'
  } catch (error) {
    errorHandler(res, error);
    // res.status(500).json({
    //   status: 500,
    //   message: "Internal Server Error"
    // });
    // return;
  } 
 }

 public async create (req: Request, res: Response): Promise <void> {
  try {
    const { name, division, role, salary } = req.body;
    const result = await this.employeeService.create({ name, division, role, salary });
    handleSuccess(res, result, 'Successfully created employee');
    
    
  } catch (error) {
    errorHandler(res, error);
    
  }
 }

 public async remove (req: Request, res: Response): Promise <void> {
  try {
    const { id } = req.params
    const result = await this.employeeService.remove(id)
    handleSuccess(res, {}, 'Employee Deleted Successfully.');
    
  } catch (error) {
   errorHandler(res, error) 
  }
 }

 public async transferPayroll (req: Request, res: Response): Promise<void> {
  try {
    const result = this.employeeService.transferPayroll();
    handleSuccess(res, result, result.message);
  } catch (error) {
    errorHandler(res, error)
  }
 }

}