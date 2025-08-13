//DTO -> Data Transfer Object, berisikan data-data yang akan diolah.
//DTO isinya interface atau class, yang berfungsi untuk mendefinisikan struktur data yang akan digunakan dalam aplikasi.
//Pada kasus ini, kita akan membuat DTO untuk Employee.
export interface EmployeeDTO {
  id_employee: string;
  name: string;
  department: string;
  role: string;
  payroll_history?:[]
  created_at?: Date,
  updated_at?: Date,
  deleted_at?: Date
}