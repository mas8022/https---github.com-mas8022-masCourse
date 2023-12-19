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
  const routes = useRoutes(routesArray);
  const [modal, setModal] = useState(false);
  const [modalMode, setModalMode] = useState(null);
  useEffect(() => {
    console.log(modalMode);
  }, [modalMode]);

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
