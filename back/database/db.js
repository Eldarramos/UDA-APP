import { Sequelize } from "sequelize";
import {
  DB_PASSWORD,
  DB_HOST,
  DB_USER,
  DB_NAME, 
} from "../config.js";


const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

export default db;
