import "./Cms.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Users from "./Users/Users";
import Product from "./Product/Product";
import HomeCms from "./HomeCms/HomeCms";
import AdminProfile from "./AdminProfile/AdmineProfile";
import CmsComments from "./CmsComments/CmsComments";
import { useEffect, useState } from "react";

export default function Cms() {
  const [notifCount, setNotifCount] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/comments")
      .then((res) => res.json())
      .then((data) => setNotifCount(data.length));
  }, []);

  useEffect(() => {
    console.log(notifCount);
  }, [notifCount]);

  return (
    <div className="cms">
      <div className="cms__sidebar">
        <div>
          <p className="dasdsa">Admin Dashboard</p>
          <hr />
        </div>
        <ul>
          <NavLink
            to={"/cms/homeCms"}
            className={(link) =>
              link.isActive ? "link cmsRoutes cmsRouteActive" : "link cmsRoutes"
            }
          >
            <img
              className="image "
              src="../../../public/images/home.svg"
              alt="cms-home"
            />
            <span>Home</span>
          </NavLink>

          <NavLink
            to={"/cms/product"}
            className={(link) =>
              link.isActive ? "link cmsRoutes cmsRouteActive" : "link cmsRoutes"
            }
          >
            <img
              className="image "
              src="../../../public/images/product.svg"
              alt="cms-courses"
            />
            <span>Courses</span>
          </NavLink>

          <NavLink
            to={"/cms/users"}
            className={(link) =>
              link.isActive ? "link cmsRoutes cmsRouteActive" : "link cmsRoutes"
            }
          >
            <img
              className="image "
              src="../../../public/images/users.svg"
              alt="cms-users"
            />
            <span>Users</span>
          </NavLink>
        </ul>
      </div>

      <div className="navAndContainer">
        <div className="cms__navbar">
          <Link className="link" to={"/"}>
            <div className="cms__logo">
              <img src="../../../public/images/shape-17.svg" alt="logo" />
            </div>
          </Link>

          <div className="cms__nav__btns">
            <Link className="link" to={"/cms/adminProfile"}>
              <img
                src="../../../public/images/profile.webp"
                className="cms__profile image"
                alt="admin-profile"
              ></img>
            </Link>

            <Link to={"/cms/cmsComments"} className="link">
              <div className="notification">
                <img
                  className="image cms__nav__notification__icon"
                  src="../../../public/images/notification.svg"
                  alt="admin-notification"
                />
                {notifCount ? (
                  <div className="cms__nav__notifCount">{notifCount}</div>
                ) : null}
              </div>
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="homeCms" element={<HomeCms />} />
          <Route path="product" element={<Product />} />
          <Route path="users" element={<Users />} />
          <Route path="adminProfile" element={<AdminProfile />} />
          <Route path="cmsComments" element={<CmsComments />} />
        </Routes>
      </div>
    </div>
  );
}
