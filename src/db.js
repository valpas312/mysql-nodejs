//Creacion de la base de datos
import { createPool } from "mysql2/promise.js";
import {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    PORT,
} from "./config.js"

//con la constante pool se crea la conexion a la base de datos y se manejan las querys
const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: PORT,
});

pool.getConnection()

export default pool;