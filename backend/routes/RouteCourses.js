const express = require("express");
const db = require("../dataBase");

const courseRouter = express.Router();

courseRouter.get("/courses", (req, res) => {
  let getAllCourses = `SELECT * FROM courses`;
  db.query(getAllCourses, (err, result) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

courseRouter.post("/courses", (req, res) => {
  let insertNewCourse = `INSERT INTO courses VALUES (NULL,
    '${req.body.courseName}', '${req.body.masterName}',
    '${req.body.price}', '${req.body.primaryPrice}',
    '${req.body.studentCount}', '${req.body.satisPercntCourse}',
    '${req.body.courseImage}', '${req.body.courseDescribe}',
    '${req.body.url}')`;
  db.query(insertNewCourse, (err, result) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

courseRouter.put("/courses/:courseId", (req, res) => {
  let courseId = req.params.courseId;
  let updateCourse = `UPDATE courses SET courseName='${req.body.courseName}',masterName='${req.body.masterName}',price='${req.body.price}',primaryPrice='${req.body.primaryPrice}',studentCount='${req.body.studentCount}',satisPercntCourse='${req.body.satisPercntCourse}',courseImage='${req.body.courseImage}',courseDescribe='${req.body.courseDescribe}',url='${req.body.url}' WHERE id = ${courseId}`;
  db.query(updateCourse, (err, result) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

courseRouter.delete("/courses/:courseId", (req, res) => {
  let courseId = req.params.courseId;
  let deleteCourse = `DELETE FROM courses WHERE id = ${courseId}`;
  db.query(deleteCourse, (err, result) => {
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

module.exports = courseRouter;
