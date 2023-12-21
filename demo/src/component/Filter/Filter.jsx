import "./Filter.css";
import './Filter-media.css'
import { useContext, useEffect } from "react";
import context from "../../Context/Context";
import courses from "../../dataBase";

export default function Filter() {
  const contextFilter = useContext(context);

  useEffect(() => {
    let coursesShow;
    if (contextFilter.filter === "Popular") {
      coursesShow = [...courses].sort(
        (a, b) => b.satisPercntCourse - a.satisPercntCourse
      );
    } else if (contextFilter.filter === "Expensive") {
      coursesShow = [...courses].sort((a, b) => b.price - a.price);
    } else if (contextFilter.filter === "Cheapest") {
      coursesShow = [...courses].sort((a, b) => a.price - b.price);
    } else {
      coursesShow = courses;
    }
    contextFilter.setCoursesShow(coursesShow);
  }, [contextFilter.filter]);

  return (
    <div className="filter">
      <div
        onClick={() => {
          contextFilter.setFilter("All");
          contextFilter.setFilterActive("All");
          contextFilter.setPaginationBtn(1);
          contextFilter.setPaginationBtnActive(1);
        }}
        className={
          contextFilter.filterActive === "All" ? "filterBtnActive" : "filterBtn"
        }
      >
        All
      </div>
      <div
        onClick={() => {
          contextFilter.setFilter("Popular");
          contextFilter.setFilterActive("Popular");
          contextFilter.setPaginationBtn(1);
          contextFilter.setPaginationBtnActive(1);
        }}
        className={
          contextFilter.filterActive === "Popular"
            ? "filterBtnActive"
            : "filterBtn"
        }
      >
        Popular
      </div>
      <div
        onClick={() => {
          contextFilter.setFilter("Expensive");
          contextFilter.setFilterActive("Expensive");
          contextFilter.setPaginationBtn(1);
          contextFilter.setPaginationBtnActive(1);
        }}
        className={
          contextFilter.filterActive === "Expensive"
            ? "filterBtnActive"
            : "filterBtn"
        }
      >
        Expensive
      </div>
      <div
        onClick={() => {
          contextFilter.setFilter("Cheapest");
          contextFilter.setFilterActive("Cheapest");
          contextFilter.setPaginationBtn(1);
          contextFilter.setPaginationBtnActive(1);
        }}
        className={
          contextFilter.filterActive === "Cheapest"
            ? "filterBtnActive"
            : "filterBtn"
        }
      >
        Cheapest
      </div>
    </div>
  );
}
