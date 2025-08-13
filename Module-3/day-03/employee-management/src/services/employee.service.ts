// service -> berisi proses bisnis, atau logika dari fitur aplikasi.
// service dipasang di dalam controller, untuk memisahkan antara logika bisnis dan logika presentasi.

import { EmployeeDTO } from "../dto/employee.dto"
import { pool } from "../helpers/database/db"

interface EmployeeQueryParams{
  page: number,
  limit: number,
  role?: string,
  department: string,
  sort?: string,
  search?: string
}

  export class EmployeeService {

  public async getAll(params: EmployeeQueryParams) {
    const { page, limit, role, department, sort, search } = params
    let query = 'SELECT * FROM employees WHERE deleted_at IS NULL '
    const values: any[] = []
    let counter: number = 1

    if(role) {
      query += ` AND ROLE = $${counter++}`
      values.push(role)
    }

    if (department) {
      query += ` AND DEPARTMENT = $${counter++}`
      values.push(department)
    }

    if(search) {
      query += ` AND (name ILIKE $${counter++} OR role ILIKE $${counter++} OR department ILIKE $${counter++})`
      values.push(`%${search}%`, `%${search}%`, `%${search}%`)
    }

    const offset = (page - 1) * limit
    query += ` ORDER BY name ${sort?.toUpperCase() ==='DESC' ? 'DESC' :'ASC'} LIMIT $${counter++} OFFSET $${counter++}`
    values.push(limit, offset)
    const result = await pool.query(query, values)
    return result.rows
  }
  // public async getAll() {
  //   const result = await pool.query('SELECT * from employees');
  //   return result.rows;
  // }

  public async getById(id: number) {
    // FIX: The query now correctly takes the 'id' parameter in an array.
    // FIX: The method now returns the first row found, or null if not found.
    const result = await pool.query('SELECT * from employees WHERE id_employee = $1', [id]);
    return result.rows[0];
  }

  public async create(data: EmployeeDTO) {
    // FIX: Correcting the placeholders to $1, $2, and $3 to match the three data parameters.
    // FIX: The method now returns the newly created employee.
    const result = await pool.query(`INSERT INTO employees (name, department, role) values ($1, $2, $3) RETURNING *`, [data.name, data.department, data.role]);
    return result.rows[0];
  }

  public async softDelete(id: number) {
    // This code was already correct.
    const result = await pool.query(`UPDATE employees SET deleted_at = CURRENT_TIMESTAMP WHERE id_employee = $1 RETURNING *`, [id]);
    return result.rows[0];
  }

  public async hardDelete(id: number) {
    // FIX: Correcting the placeholder from '1$' to '$1' for the query parameter.
    await pool.query ('DELETE FROM employees WHERE id_employee = $1', [id]);
    return "Successfully deleted employee.";
  }
}