import { config } from "dotenv";
config();

const {
  DB_PASSWORD,
  DB_HOST,
  DB_USER,
  DB_NAME,
  PORT
} = process.env;

export {
  DB_PASSWORD,
  DB_HOST,
  DB_USER,
  DB_NAME,
  PORT
};




