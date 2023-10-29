import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3306;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "41667229Vv.";
export const DB_DATABASE = process.env.DB_DATABASE || "users";