import { Router } from "express";
import { logRequest } from "../middlewares/logRequest.middleware";
import { EmployeeController } from "../controllers/employee.controller";
import { limitRequest } from "../middlewares/limitRequest.middleware";

const employeeRouter = Router()
const controller = new EmployeeController();

employeeRouter.get ('/employees', limitRequest, logRequest, controller.getAll.bind(controller));
employeeRouter.get ('/employees/:id', limitRequest, logRequest, controller.getById.bind(controller));

employeeRouter.post ('/employees', limitRequest, logRequest, controller.create.bind(controller));
employeeRouter.delete('/employees/:id', limitRequest, logRequest, controller.remove.bind(controller));
employeeRouter.post ('/employees/payroll', limitRequest, logRequest, controller.transferPayroll.bind(controller))


export default employeeRouter