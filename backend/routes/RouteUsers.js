const express = require("express");
const db = require("../dataBase");

const userRouter = express.Router();

userRouter.post("/users", (req, res) => {
  let insertNewUser = `INSERT INTO users VALUES (NULL, '${
    req.body.fullName
  }', '${req.body.email}', '${
    req.body.password
  }', '${new Date().toLocaleDateString("fa-IR")}')`;
  db.query(insertNewUser, (err, result) => {
    if (err) {
      console.log('err user');
    }else{
      res.send(result)
    }
  });
});

module.exports = userRouter;
