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
import courses from "./dataBase";

function App() {
  const routes = useRoutes(routesArray);
  const [modal, setModal] = useState(false);
  const [modalMode, setModalMode] = useState(null);
  const [filter, setFilter] = useState(() => {
    const localFilter = JSON.parse(localStorage.getItem("filter"));
    return localFilter ? localFilter : "All";
  });
  const [coursesShow, setCoursesShow] = useState(courses);

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
