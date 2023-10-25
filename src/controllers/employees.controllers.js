import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  const [rows] = await pool.query("select * from employee");
  res.json(rows);
};

export const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query("select * from employee where id = ?", [id]);

  if (rows.length === 0) {
    return res
      .status(404)
      .json({ message: `Employee with id ${id} does not exists` });
  }

  res.json(rows);
};

export const createEmployee = async (req, res) => {
  const { name, salary } = req.body;

  if (!name || !salary) {
    return res.status(400).send("Content not valid");
  }

  const [rows] = await pool.query(
    "insert into employee (name, salary) values (?,?)",
    [name, salary]
  );
  res.json({ id: rows.insertId, name, salary });
};

export const deleteEmployeeById = async (req, res) => {
  const { id } = req.params;

  const [rows] = await pool.query("delete from employee where id = ?", [id]);

  if (rows.affectedRows === 0) {
    return res
      .status(404)
      .json({ message: `Employee with id ${id} does not exists` });
  }

  res.json({ message: `Employee with id ${id} deleted successfully` });
};

export const updateEmployeeById = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;

  if (!name || !salary) {
    return res.status(400).send("Content not valid");
  }

  const [rows] = await pool.query(
    "update employee set name = ifnull(?, name), salary = ifnull(?, salary) where id = ?",
    [name, salary, id]
  );

  if (rows.affectedRows === 0) {
    return res
      .status(404)
      .json({ message: `Employee with id ${id} does not exists` });
  }

  res.json({ message: `Employee with id ${id} updated successfully` });
};