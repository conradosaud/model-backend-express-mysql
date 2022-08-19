// CONEXÃO COM O MYSQL
require('dotenv').config();
const mysql = require('mysql2');

// Conexão com o banco de dados
// Os dados da conexão estão no arquivo .env
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USUARIO,
  password: process.env.SENHA,
  database: process.env.BANCO
});

module.exports = {
    connection
}