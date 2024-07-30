 import  { Client } from 'pg';
 import dotenv from 'dotenv';

 dotenv.config();

 const banco = process.env.DB; 
 const senha = process.env.SENHA; 
 const user = process.env.USERNAME; 

 const conString: string = process.env.DATABASE_URL  ||` postgres://${user}:${senha}@localhost/${banco}` ;

 const client: Client = new Client({
    connectionString:conString,
 });

 client.connect((err: Error)=>{
    if(err) {
        console.log("erro ao conectar" , err.stack);
    }

    console.log('Connected to the database');

 });