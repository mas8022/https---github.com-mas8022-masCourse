import "./Courses.css";
import { useContext, useEffect, useState } from "react";
import FlexCourses from "../../component/FlexCourses/FlexCourses";
import Filter from "../../component/Filter/Filter";
import context from "../../Context/Context";

export default function Courses() {
  const contextCourses = useContext(context);
  const [showCoursesDom, setShowCoursesDom] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/courses")
      .then((res) => res.json())
      .then((data) => {
        contextCourses.setCoursesShow(data);
      });
  }, []);

  useEffect(() => {
    setShowCoursesDom(
      [...contextCourses.coursesShow].slice(
        contextCourses.paginationBtn * 6 - 6,
        contextCourses.paginationBtn * 6
      )
    );
  }, [contextCourses.paginationBtn, contextCourses.coursesShow]);

  useEffect(() => {
    contextCourses.setCoursesShow(
      [...contextCourses.allCourses].filter((item) => item.courseName.includes(search))
    );
  }, [search]);
  
 

  const searchHandler = () => {
    const findCourse = [...contextCourses.allCourses].find((item) => item.courseName === search);
    if (findCourse) {
      console.log(findCourse);
      window.location.pathname = `/showCourse/${findCourse.courseName}`;
    }
  };

  return (
    <>
      <div className="courses__searchBar">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search your course..."
        />
        <img
          onClick={searchHandler}
          src="/images/search.svg"
          alt="search button"
        />
      </div>

      <Filter />
      <FlexCourses infos={showCoursesDom} />

      <div className="pagination">
        {Array.from(
          Array(Math.ceil(contextCourses.coursesShow.length / 6)).keys()
        )?.map((num, index) => (
          <div
            key={index}
            onClick={() => {
              contextCourses.setPaginationBtn(num + 1);
              contextCourses.setPaginationBtnActive(num + 1);
              window.scrollTo(0, 0);
            }}
            className={
              num + 1 === contextCourses.paginationBtnActive
                ? "paginationBtnActive"
                : "pagination__btn"
            }
          >
            {num + 1}
          </div>
        ))}
      </div>
    </>
  );
}
