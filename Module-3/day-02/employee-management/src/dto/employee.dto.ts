//DTO -> Data Transfer Object, berisikan data-data yang akan diolah.
//DTO isinya interface atau class, yang berfungsi untuk mendefinisikan struktur data yang akan digunakan dalam aplikasi.
//Pada kasus ini, kita akan membuat DTO untuk Employee.
export interface EmployeeDTO {
  id: string;
  name: string;
  division: string;
  role: string;
}