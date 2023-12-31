const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "orangesite",
});
module.exports = db;
