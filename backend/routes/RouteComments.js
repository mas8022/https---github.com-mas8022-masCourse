const express = require("express");
const db = require("../dataBase");
const commentsRouter = express.Router();

commentsRouter.post("/comments", (req, res) => {
  let insertNewComments = `INSERT INTO comments VALUES (NULL, '${
    req.body.firstName
  }', '${req.body.lastName}', '${req.body.email}', '${req.body.phone}', '${
    req.body.subject
  }', '${req.body.massage}', '${req.body.status}', '${
    req.body.awnser
  }', '${new Date().toLocaleDateString("fa-IR")}')`;
  db.query(insertNewComments, (err, result) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(result);
    }
  });
});
commentsRouter.get("/comments", (req, res) => {
  let allComments = `SELECT * FROM comments`;
  db.query(allComments, (err, result) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(result);
    }
  });
});
commentsRouter.delete("/comments/:commentId", (req, res) => {
  let  commentId  = req.params.commentId
  let deleteComment = `DELETE FROM comments WHERE id = ${commentId}`;
  db.query(deleteComment, (err, result) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

module.exports = commentsRouter;
