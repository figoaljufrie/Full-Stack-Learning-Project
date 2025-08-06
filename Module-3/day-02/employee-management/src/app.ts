import express, { Application } from "express"
import employeeRouter from "./routers/employee.router";

const app: Application = express();
const PORT = 8000;

app.use(express.json()); // Middleware to parse JSON bodies
app.set ('trust proxy', true); // Enable trust proxy for logging IP addresses
app.use ('/api/v1', employeeRouter); // Mount the employee router

// cara akses employee:
// GET http://localhost:8000/api/v1/employees (GET ALL)
// GET http://localhost:8000/api/v1/employees/:id (GET BY ID)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});