import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import "./App-media.css";
import Navbar from "./component/Navbar/Navbar";
import Topbar from "./component/Topbar/Topbar";
import routesArray from "./routes";
import Footer from "./component/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const routes = useRoutes(routesArray);

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
    <div className="App">
      <div className="contain">
        <Topbar />
        <Navbar />
        <div className="container">{routes}</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
