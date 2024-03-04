const express = require("express");
const db = require("../dataBase");

const commentsRouter = express.Router();

commentsRouter.get("/comments", (req, res) => {
  let allComments = `SELECT * FROM comments`;
  db.query(allComments, (err, result) => {
    if (err) {
      res.json(null);
    } else {
      res.send(result);
    }
  });
});

commentsRouter.post("/comments", (req, res) => {
  // let insertNewComments = `INSERT INTO comments VALUES (NULL, '${"mohammad"}', '${"abbaszzadeh"}', '${"m.a@gmailo.com"}', '${"091252423423"}', '${"html"}', '${"hnsifhi hfudisj sdfsihlnda"}','${"2/17/2023"}')`;
  
  let insertNewComments = `INSERT INTO comments VALUES (NULL, '${
    req.body.firstName
  }', '${req.body.lastName}', '${req.body.email}', '${req.body.phone}', '${
    req.body.subject
  }', '${req.body.massage}','${new Date().toLocaleDateString()}')`;


  db.query(insertNewComments, (err, result) => {
    if (err) {
      res.json(null);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

commentsRouter.delete("/comments/:commentId", (req, res) => {
  let commentId = req.params.commentId;
  let deleteComment = `DELETE FROM comments WHERE id = ${commentId}`;
  db.query(deleteComment, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

module.exports = commentsRouter;
