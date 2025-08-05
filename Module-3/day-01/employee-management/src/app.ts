import express, { Request, Response, Application } from 'express';
import { dataUser } from '../database/employee.json';
import { dataStock } from '../database/stock.json';



type Employee = {
  id: number,
  name: string,
  division: string,
  role: string
}

type Stock = {
  id: number,
  name: string,
  quantity: string,
  price: string
}

class EmployeeApi {
  private employee: Employee[] = dataUser
  private stock: Stock[] = dataStock
  public app: Application = express();

  constructor() {
    this.app.use(express.json()); //middleware to parse JSON bodies
    this.employeeRoutes();
    this.stockRoutes();
  }

  public createEmployee(req: Request, res: Response): void {
    const { name, division, role } = req.body;
    // Validate input
    if (!name || !division || !role) {
      res.json({ message: 'All fields are required' })
      return;
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

  //PUT & PATCH
  //PUT: buat update 
  public updateEmployeeById(req: Request, res: Response): void {
    const { id } = req.params;
    const { name, division, role } = req.body;

  //Cari Index dari employee yang ingin diupdate
    const employeeIndex = this.employee.findIndex((employee) => employee.id === Number(id));

  //kalo employee gak ketemu, response not found
    if (employeeIndex === -1) {
      res.json({ message: 'Employee not found.'});
    }

  //kalo body request ga ada, responsenya ini:
    if (!name || !division || !role) {
      res.json({ message: 'Missing Required Fields',
        Missing: {
          name: !name ? 'name is required' : "",
          division: !division ? 'division is required' : "",
          role: !role ? 'role is required' : ""
        }
      })
    }

    //kalo body request ada, maka update employee
    this.employee[employeeIndex] = {
    id: Number(id),
    name: name,
    division: division,
    role: role
  }

  //Response kalau sukses
  res.json({
    message: 'Employee updated successfully',
    data: this.employee[employeeIndex]
  })
  }

  //Delete:
  //Hapus employee berdasarkan ID
  
  public deleteEmployeeById(req: Request, res: Response): void{
  const { id } = req.params;

    //Cari index dari employee yang ingin dihapus
    const employeeIndex = this.employee.findIndex((employee) => employee.id === Number(id));

    //Jika ID tidak ditemukan, responsenya "Employee not found"
    if (employeeIndex === -1) {
      res.json({ message: 'Employee not found.' });
    }
    //Jika ID ditemukan, hapus employee dari array this.employee
    this.employee.splice(employeeIndex, 1);

    //Respons kalau sukses
    res.json({
      message: 'Employee deleted successfully',
    });
  }

  //CRUD fot Stock

  //BIKIN PRODUK BARU DAN MASUKIN KE STOCK:
  public createStock(req: Request, res: Response): void {
    //validasi data yang mau dibuat.
    const { name, quantity, price } = req.body;

    //kalo data tidak lengkap, response:
    if (!name || !quantity || !price) {
      res.json({ message: 'kurang lengkap datanya.'});
      return;
    }

    //Kalo data lengkap, bikins tock baru. Id Math.ceil buat generate ID acak, pakai math.random.
    const newStock: Stock = {
      id: Math.ceil(Math.random()* 100),
      name: name,
      quantity: quantity,
      price: price
    }

    //kalo data lengkap. Disimpan ke stock.
    this.stock.push(newStock);
    res.json({ message: "Stock Berhasil dibuat bro."})

  }

  //AMBIL SEMUA DATA DARI STOCK:
  public getAllStocks(req: Request, res: Response): void {
    res.json(this.stock);
  }

  //Ambil data stock berdasarkan ID
  public getStockById(req: Request, res: Response): void {
    const { id } = req.params;
    const stock = this.stock.find((stock) => stock.id === Number(id));

    //Kalo stocknya ketemu:
    if (stock) {
      res.json(stock);

      //kalo stocknya gak ketemu:
    } else {
      res.json({ message: 'Barangnya gak ada, bro.' });
    }
  }

  //UPDATE STOCK BERDASARKAN ID:
  public updateStockById(req: Request, res: Response): void {
    const { id } = req.params;
    const { name, quantity, price } = req.body;
  

  const stockIndex = this.stock.findIndex((stock) => stock.id === Number(id))

  //kalo stock gak ketemu.
   if (stockIndex === -1) {
    res.json({ message: 'Stock not found.' });
  } 
  
  //Kalo body reques belom lengkap.
  if (!name || !quantity || !price) {
    res.json ({
      message: 'Ada data yang kurang bro.',
      Missing : {
        name: !name ? 'Namanya belom, bro' : "",
        quantity: !quantity ? 'Quantitynya belom, bro' : "",
        price: !price ? 'Harganya belom, bro' : ""
      }
    
    });
  }
  // Kalo body reques lengkap, update stock.
  this.stock[stockIndex] = {
    id: Number(id),
    name: name,
    quantity: quantity,
    price: price
  }
  // response:
  res.json({
    message: 'Update-an berhasil, bro.',
    data: this.stock[stockIndex]})
}

//DELETE SOCK BERDASARKan ID:
public deleteStockById(req: Request, res: Response): void {
    const { id } = req.params;
    const stockIndex = this.stock.findIndex((stock) => stock.id === Number(id));

  //kalo stocknya ketemu, hapus stocknya.
  this.stock.splice(stockIndex, 1);

  if (stockIndex === -1) {
    res.json({ message: 'ID-nya gak ketemu, bro.' });
  }
}


 


  public employeeRoutes(): void {
    this.app.get('/api/employees', this.getAllEmployees.bind(this));
    this.app.get('/api/employees/:id', this.getEmployeeById.bind(this));
    this.app.post('/api/employees', this.createEmployee.bind(this));
    this.app.put('/api/employees/:id', this.updateEmployeeById.bind(this));
    this.app.delete('/api/employees/:id', this.deleteEmployeeById.bind(this));
  } 

  public stockRoutes(): void {
    this.app.get('/api/stocks', this.getAllStocks.bind(this));
    this.app.get('/api/stocks/:id', this.getStockById.bind(this));
    this.app.post('/api/stocks', this.createStock.bind(this));
    this.app.put('/api/stocks/:id', this.updateStockById.bind(this));
    this.app.delete('/api/stocks/:id', this.deleteStockById.bind(this));
    };
  }

const PORT = 8000;
const server = new EmployeeApi();
server.employeeRoutes();
server.app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});