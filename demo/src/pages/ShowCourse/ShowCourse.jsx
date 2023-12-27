import "./ShowCourse.css";
import './ShowCourse-media.css'
import { useParams } from "react-router-dom";
import Player from "../../component/Player/Player";
import courses from '../../dataBase'

export default function ShowCourse() {
  const { courseNm } = useParams();

  const course = courses.find(item => item.courseName === courseNm)

  return (
    <div className="showCourse">
      <Player url={course.url} />
      <div>
        <h2>
          {course.courseName} (<span>{course.masterName}</span>)
        </h2>
        <hr />

        <p>
        {course.courseDescribe}
        </p>
      </div>
    </div>
  );
}
