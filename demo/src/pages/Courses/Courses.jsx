import "./Courses.css";
import { useContext, useEffect, useState } from "react";
import FlexCourses from "../../component/FlexCourses/FlexCourses";
import Filter from "../../component/Filter/Filter";
import context from "../../Context/Context";
export default function Courses() {
  const contextCourses = useContext(context);
  const [showCoursesDom, setShowCoursesDom] = useState([]);

  useEffect(() => {
    setShowCoursesDom(
      [...contextCourses.coursesShow].slice(
        contextCourses.paginationBtn * 6 - 6,
        contextCourses.paginationBtn * 6
      )
    );
  }, [contextCourses.paginationBtn, contextCourses.coursesShow]);

  return (
    <>
      <Filter />
      <FlexCourses infos={showCoursesDom} />
      <div className="pagination">
        {Array.from(
          Array(Math.ceil(contextCourses.coursesShow.length / 6)).keys()
        ).map((num, index) => (
          <div
            key={index}
            onClick={() => {
              contextCourses.setPaginationBtn(num + 1);
              contextCourses.setPaginationBtnActive(num + 1);
              window.scrollTo(0,0)
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
