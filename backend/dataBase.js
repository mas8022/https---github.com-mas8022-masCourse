const mysql = require("mysql");
const db = mysql.createConnection({
  port: "32901",
  host: "k2.liara.cloud",
  user: "root",
  password: "8f9sCdZxBaom854IxSF8JIhu",
  database: "orangesite",
});
module.exports = db;

// const mysql = require("mysql");
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "orangesite",
// });
// module.exports = db;