import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import AboutUs from "./pages/AboutUs/AboutUs";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
const routesArray = [
  { path: "/", element: <Home /> },
  { path: "/courses", element: <Courses /> },
  { path: "/aboutUs", element: <AboutUs /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/Contact", element: <Contact /> },
];

export default routesArray;
