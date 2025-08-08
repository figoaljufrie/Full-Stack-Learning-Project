// service -> berisi proses bisnis, atau logika dari fitur aplikasi.
// service dipasang di dalam controller, untuk memisahkan antara logika bisnis dan logika presentasi.

import { EmployeeDTO } from "../dto/employee.dto"
import { pool } from "../helpers/database/db"

  export class EmployeeService {

  public async getAll() {
    const result = await pool.query('SELECT * from employees');
    return result.rows;
  }

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