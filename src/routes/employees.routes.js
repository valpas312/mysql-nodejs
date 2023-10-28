import { Router } from "express";
import { getEmployees, createEmployee, getEmployeeById, deleteEmployeeById, updateEmployeeById, login } from "../controllers/employees.controllers.js";

const router = Router();

router.get("/employees", getEmployees);
router.get("/employee/:id", getEmployeeById)
router.post("/employee", createEmployee);
router.post("/login", login);
router.put("/employee/:id", updateEmployeeById);
router.delete("/employee/:id", deleteEmployeeById);

export default router;