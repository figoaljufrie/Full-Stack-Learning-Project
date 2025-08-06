// service -> berisi proses bisnis, atau logika dari fitur aplikasi.
// service dipasang di dalam controller, untuk memisahkan antara logika bisnis dan logika presentasi.

import { EmployeeDTO} from "../dto/employee.dto";
import employeeData from "../dummy/employee-data.json";

interface FilterData {
  role?: string;
  division?: string;
  search?: string;
}

export class EmployeeService {
  private employeeList: EmployeeDTO[] = employeeData.employeeData;

  public getAll(data: FilterData, page: number = 1, limit: number = 10): EmployeeDTO[] {
    let result = [...this.employeeList];


    if (data.role) {
      result = result.filter((emp: EmployeeDTO) => emp.role.toLowerCase() === data.role?.toLowerCase());
    }

    if (data.division) {
      result = result.filter((emp: EmployeeDTO) => emp.division.toLowerCase() === data.division?.toLowerCase());
    }

    if (data.search) {
      result = result.filter((emp: EmployeeDTO) => emp.name.toLowerCase().includes(data.search?.toLowerCase() as string));
    }

    const start = (page - 1) * limit;
    const end = start + limit;
    return result.slice(start, end);
    
  }

  public getById(id: string): EmployeeDTO | undefined {
    return this.employeeList.find((emp: EmployeeDTO) => emp.id === id);
  }

  public async create(data: Omit<EmployeeDTO, 'id'>) : Promise<EmployeeDTO> {
    const newEmployee: EmployeeDTO = {
      id: `MOX-${String(Math.floor(Math.random() * 200))}`,
      name: data.name,
      division: data.division,
      role: data.role,
      salary: data.salary
    };

    //push ke simulasi:
    this.employeeList.push(newEmployee);

    return newEmployee;
  }


  public remove(id: string): {message: string} {
    const index = this.employeeList.findIndex((emp: EmployeeDTO) => emp.id === id)
    if (index === -1) {
      return {
        message: "ID not found"
      }
    }

    this.employeeList.splice(index, 1) 
    return {
      message: 'Employee Deleted Successfully.'
    }
  }

  public transferPayroll(): { message: string, totalTransfered?: string} {
    const date = new Date();

    if (date.getDate() !== 6) {
      return {
        message: 'Today is not Payroll Day'
      }
    }

    let total = 0;
    this.employeeList.forEach((emp: EmployeeDTO) => {
      emp.payroll_history?.push({
        date: new Date(),
        amount: Number(emp.salary)
      });
      total = total + Number(emp.salary);
    });

    return {
      message: 'Payroll transferred successfully.',
      totalTransfered: total.toLocaleString()
    };
  }

}