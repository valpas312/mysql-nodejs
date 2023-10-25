//Creacion de la base de datos
import { createPool } from "mysql2/promise.js";
// import {
//     DB_HOST,
//     DB_USER,
//     DB_PASSWORD,
//     DB_DATABASE,
// } from "./config.js"

//con la constante pool se crea la conexion a la base de datos y se manejan las querys
export const pool = createPool({
    host: 'viaduct.proxy.rlwy.net',
    user: 'root',
    password: '2q3b304em$ntck49weug2fo$lj6eo3d1',
    database: 'railway'
});
