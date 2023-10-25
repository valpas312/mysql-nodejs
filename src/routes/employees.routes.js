import { Router } from "express";
import { getEmployees, createEmployee, getEmployeeById, deleteEmployeeById, updateEmployeeById } from "../controllers/employees.controllers.js";

const router = Router();

router.get("/employees", getEmployees);
router.get("/employee/:id", getEmployeeById)
router.post("/employee", createEmployee);
router.put("/employee/:id", updateEmployeeById);
router.delete("/employee/:id", deleteEmployeeById);

export default router;