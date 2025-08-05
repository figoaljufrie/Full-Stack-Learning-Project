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
}