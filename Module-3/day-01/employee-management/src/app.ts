import express, { Request, Response, Application } from 'express';
import { data } from '../database/employee.json';

type Employee = {
  id: number,
  name: string,
  division: string,
  role: string
}

class EmployeeApi {
  private employee: Employee[] = data
  public app: Application = express();

  constructor() {
    this.app.use(express.json()); //middleware to parse JSON bodies
    this.employeeRoutes();
  }

  public createEmployee(req: Request, res: Response): void {
    const { name, division, role } = req.body;
    // Validate input
    if (!name || !division || !role) {
      res.json({ message: 'All fields are required' });
    }

    const newEmployee: Employee = {
      id: Math.ceil(Math.random() * 100), // Generate a random ID
      name: name,
      division: division,
      role: role
    }

    //simpan body request ke this.employee
    this.employee.push(newEmployee);
    res.json({
      message: 'Employee created successfully',
    }); 
  }
  public getAllEmployees(req: Request, res: Response): void {
    res.json(this.employee)
  }

  public getEmployeeById(req: Request, res: Response): void {
    const { id } = req.params;
    const employee = this.employee.find((employee) => employee.id === Number(id))
    if (employee) {
      res.json(employee);
    } else {
      res.json({ message: 'Employee not found' });
    }
  }

  public employeeRoutes(): void {
    this.app.get('/api/employees', this.getAllEmployees.bind(this));
    this.app.get('/api/employees/:id', this.getEmployeeById.bind(this));
    this.app.post('/api/employees', this.createEmployee.bind(this));
  } 
}

const PORT = 8000;
const server = new EmployeeApi();
server.employeeRoutes();
server.app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});