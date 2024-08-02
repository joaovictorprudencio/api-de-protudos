"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const banco = process.env.DB;
const senha = process.env.SENHA;
const user = process.env.USERNAME;
const conString = process.env.DATABASE_URL || `postgresql://${user}:${senha}@localhost/${banco}`;
const client = new pg_1.Client({
    connectionString: conString,
});
client.connect((err) => {
    if (err) {
        console.log("erro ao conectar", err.stack);
    }
    console.log("Connected to the database");
});
