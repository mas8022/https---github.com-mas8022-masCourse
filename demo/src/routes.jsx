import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import PricePage from "./pages/Pricing/PricePage";
import ShowCourse from "./pages/ShowCourse/ShowCourse";
import Profile from "./pages/Profile/Profile";
import Cms from "./pages/Cms/Cms";
import Users from "./pages/Cms/Users/Users";
import Product from "./pages/Cms/Product/Product";
import HomeCms from "./pages/Cms/HomeCms/HomeCms";
const routesArray = [
  { path: "/", element: <Home /> },
  { path: "/courses", element: <Courses /> },
  { path: "/aboutUs", element: <AboutUs /> },
  { path: "/pricing", element: <PricePage /> },
  { path: "/contact", element: <Contact /> },
  { path: "/showCourse/:courseNm", element: <ShowCourse /> },
  { path: "/profile", element: <Profile /> },
  {
    path: "/cms",
    element: <Cms />,
    children: [
      { path: "/cms/users", element: <Users /> },
      { path: "/cms/product", element: <Product /> },
      { path: "/cms/homeCms", element: <HomeCms /> },
    ],
  },
];

export default routesArray;
