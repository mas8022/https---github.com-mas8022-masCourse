import { useRoutes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Topbar from "./component/Topbar/Topbar";
import routesArray from "./routes";
import Footer from "./component/Footer/Footer";
function App() {
  const routes = useRoutes(routesArray);
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
