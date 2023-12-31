const express = require("express");
const db = require("../dataBase");

const userRouter = express.Router();

userRouter.get("/users", (req, res) => {
  let insertNewUser = `SELECT * FROM users`;
  db.query(insertNewUser, (err, result) => {
    if (err) {
      console.log("err user");
    } else {
      res.send(result);
    }
  });
});

userRouter.post("/users", (req, res) => {
  let insertNewUser = `INSERT INTO users VALUES (NULL, '${
    req.body.fullName
  }', '${req.body.email}', '${
    req.body.password
  }', '${new Date().toLocaleDateString("fa-IR")}', '${req.body.profileImage}')`;
  db.query(insertNewUser, (err, result) => {
    if (err) {
      console.log("err user");
    } else {
      res.send(result);
    }
  });
});

userRouter.put("/users/:userId", (req, res) => {
  let userId = req.params.userId;
  let insertNewUser = `UPDATE users SET fullName='${
    req.body.fullName
  }', email='${req.body.email}', profileImage='${
    req.body.profileImage
  }' WHERE id = ${userId}`;
  db.query(insertNewUser, (err, result) => {
    if (err) {
      console.log("err user",err);
      res.send(null)
    } else {
      res.send(result);
    }
  });
});

module.exports = userRouter;
