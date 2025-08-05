import { Router } from "express";
import { EmployeeController } from "../controllers/employee.controller";

const employeeRouter = Router()
const controller = new EmployeeController();

employeeRouter.get ('/employee', controller.getAll.bind(controller));
employeeRouter.get ('/employee/:id', controller.getById.bind(controller));

export default employeeRouter