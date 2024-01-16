import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import "./App-media.css";
import Navbar from "./component/Navbar/Navbar";
import Topbar from "./component/Topbar/Topbar";
import routesArray from "./routes";
import Footer from "./component/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "./component/Modal/Modal";
import context from "./Context/Context";

function App() {
  const [user, setUser] = useState(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    return localUser ? localUser : {};
  });
  const routes = useRoutes(routesArray);
  const [modal, setModal] = useState(false);
  const [modalMode, setModalMode] = useState(null);
  const [filter, setFilter] = useState(() => {
    const localFilter = JSON.parse(localStorage.getItem("filter"));
    return localFilter ? localFilter : "All";
  });

  const [filterActive, setFilterActive] = useState(() => {
    const localFilterActive = JSON.parse(localStorage.getItem("filterActive"));
    return localFilterActive ? localFilterActive : "All";
  });

  const [paginationBtn, setPaginationBtn] = useState(() => {
    const localPaginationBtn = JSON.parse(
      localStorage.getItem("paginationBtn")
    );
    return localPaginationBtn ? localPaginationBtn : 1;
  });

  const [paginationBtnActive, setPaginationBtnActive] = useState(() => {
    const localPaginationBtnActive = JSON.parse(
      localStorage.getItem("paginationBtnActive")
    );
    return localPaginationBtnActive ? localPaginationBtnActive : 1;
  });
  const [logFlag, setLogFlag] = useState(() => {
    const localLoginFlag = JSON.parse(localStorage.getItem("logFlag"));
    return localLoginFlag ? localLoginFlag : false;
  });
  const [dataCourseTR, setDataCourseTR] = useState({});
  const [allCourses, setAllCourses] = useState([]);
  const [coursesShow, setCoursesShow] = useState([...allCourses]);
  const [allUsers, setUsers] = useState([]);
  const [coursesAdded, setCoursesAdded] = useState(() => {
    const localCoursesAdded = JSON.parse(localStorage.getItem("coursesAdded"));

    const uniqCoursesAdded = [];
    const keySet = new Set();

    if (localCoursesAdded) {
      localCoursesAdded.forEach((item) => {
        if (!keySet.has(item.courseName)) {
          keySet.add(item.courseName);
          uniqCoursesAdded.push(item);
        }
      });
    }

    return uniqCoursesAdded ? uniqCoursesAdded : [];
  });
  const [favCourses, setFavCourses] = useState(() => {
    const localFavCourses = JSON.parse(localStorage.getItem("favCourses"));
    const uniqFavCourses = [];
    const keySetFavCourses = new Set();
    if (localFavCourses) {
      localFavCourses.forEach((item) => {
        if (!keySetFavCourses.has(item.courseName)) {
          keySetFavCourses.add(item.courseName);
          uniqFavCourses.push(item);
        }
      });
    }
    return uniqFavCourses ? uniqFavCourses : [];
  });

  useEffect(() => {
    localStorage.setItem("favCourses", JSON.stringify(favCourses));
  }, [favCourses]);

  useEffect(() => {
    localStorage.setItem("coursesAdded", JSON.stringify(coursesAdded));
  }, [coursesAdded]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("logFlag", JSON.stringify(logFlag));
  }, [logFlag]);

  useEffect(() => {
    localStorage.setItem(
      "paginationBtnActive",
      JSON.stringify(paginationBtnActive)
    );
  }, [paginationBtnActive]);

  useEffect(() => {
    localStorage.setItem("filterActive", JSON.stringify(filterActive));
  }, [filterActive]);

  useEffect(() => {
    localStorage.setItem("paginationBtn", JSON.stringify(paginationBtn));
  }, [paginationBtn]);

  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(filter));
  }, [filter]);

  useEffect(() => {
    fetch("http://localhost:4000/api/courses")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
      
    fetch("http://localhost:4000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    AOS.init({
      duration: 1000,
      offset: 50,
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <context.Provider
      value={{
        user,
        setUser,
        modal,
        setModal,
        modalMode,
        setModalMode,
        filter,
        setFilter,
        coursesShow,
        setCoursesShow,
        filterActive,
        setFilterActive,
        paginationBtn,
        setPaginationBtn,
        paginationBtnActive,
        setPaginationBtnActive,
        logFlag,
        setLogFlag,
        dataCourseTR,
        setDataCourseTR,
        allCourses,
        setAllCourses,
        allUsers,
        setUsers,
        coursesAdded,
        setCoursesAdded,
        favCourses,
        setFavCourses,
      }}
    >
      <div className="App">
        <div className="contain">
          <Modal />
          <Topbar />
          <Navbar />
          <div className="container">{routes}</div>
        </div>
        <Footer />
      </div>
    </context.Provider>
  );
}

export default App;
