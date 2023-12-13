import { useRoutes } from "react-router-dom";
import "./App.css";
import "./App-media.css";
import Navbar from "./component/Navbar/Navbar";
import Topbar from "./component/Topbar/Topbar";
import routesArray from "./routes";
import Footer from "./component/Footer/Footer";
function App() {
  const routes = useRoutes(routesArray);
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
