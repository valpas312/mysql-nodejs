import pool from "../db.js";

export const getUsers = async (req, res) => {
  const [rows] = await pool.query("select * from users");
  res.json(rows);
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query("select * from users where id = ?", [id]);

  if (rows.length === 0) {
    return res
      .status(404)
      .json({ message: `User with id ${id} does not exists` });
  }

  res.json(rows);
};

export const createUser = async (req, res) => {
  const { name, salary } = req.body;

  if (!name || !salary) {
    return res.status(400).send("Content not valid");
  }

  const [rows] = await pool.query(
    "insert into users (name, salary) values (?,?)",
    [name, salary]
  );
  res.json({ id: rows.insertId, name, salary });
};

export const deleteUserById = async (req, res) => {
  const { id } = req.params;

  const [rows] = await pool.query("delete from users where id = ?", [id]);

  if (rows.affectedRows === 0) {
    return res
      .status(404)
      .json({ message: `User with id ${id} does not exists` });
  }

  res.json({ message: `User with id ${id} deleted successfully` });
};

export const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;

  if (!name || !salary) {
    return res.status(400).send("Content not valid");
  }

  const [rows] = await pool.query(
    "update users set name = ifnull(?, name), salary = ifnull(?,salary) where id = ?",
    [name, salary, id]
  );

  if (rows.affectedRows === 0) {
    return res
      .status(404)
      .json({ message: `User with id ${id} does not exists` });
  }

  res.json({ message: `User with id ${id} updated successfully` });
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Content not valid");
  }

  const [rows] = await pool.query("select * from users where email = ? and password = ?", [email, password]);

  if (rows.length === 0) {
    return res
      .status(404)
      .json({ message: `User with email ${email} does not exists` });
  }

  res.json(rows);
};

export const register = async (req, res) => {
  const { name, email, password, salary } = req.body;

  if (!name || !email || !password || !salary) {
    return res.status(400).send("Content not valid");
  }

  const [rows] = await pool.query(
    "insert into users (name, email, password, salary) values (?,?,?,?)",
    [name, email, password, salary]
  );

  res.json({ id: rows.insertId, name, email, password, salary });
};