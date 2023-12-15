import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import PricePage from "./pages/Pricing/PricePage";

const routesArray = [
  { path: "/", element: <Home /> },
  { path: "/courses", element: <Courses /> },
  { path: "/aboutUs", element: <AboutUs /> },
  { path: "/pricing", element: <PricePage /> },
  { path: "/contact", element: <Contact /> },
];

export default routesArray;
