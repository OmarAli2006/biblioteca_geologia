//Archivo de configuracion de la conexion con la base de datos

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "developer",
  port: "5433",
  database: "biblioteca",
});

module.exports = pool;
