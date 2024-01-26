import "./ShowCourse.css";
import "./ShowCourse-media.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Player from "../../component/Player/Player";
import courses from "../../dataBase";
import context from "../../Context/Context";

export default function ShowCourse() {
  const contextShowCourses = useContext(context);
  const { courseNm } = useParams();

  const course = courses.find((item) => item.courseName === courseNm);

  return (
    <div className="showCourse">
      {contextShowCourses.logFlag ? (
        <Player url={course.url} />
      ) : (
        <>
          {" "}
          <div className="videoPlayerAlert">
            <img
              className="image"
              src="../../../public/images/sad.svg"
              alt="sad-alert"
            />
            <p>Register first to watch the video</p>
          </div>
        </>
      )}

      <div>
        <h2>
          {course.courseName} (<span>{course.masterName}</span>)
        </h2>
        <hr />

        <p>{course.courseDescribe}</p>
        {contextShowCourses.logFlag && (
          <a className="link" href={course.url} download>
            <div className="showCourse__downloadBtn">DOWNLOAD</div>
          </a>
        )}
      </div>
      <div className="distance"></div>
    </div>
  );
}
