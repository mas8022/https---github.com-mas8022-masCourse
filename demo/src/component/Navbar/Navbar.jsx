import "./Navbar.css";
import './Navbar-media.css'
import { Link, NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <div className="fsdfuktsddfsrt">
          <Link to={"/"}>
            <div className="left-left-navbar">
              <div className="son-left-left-navbar">
                <div className="son-son-left-left-navbar"></div>
              </div>
            </div>
          </Link>

          <div className="right-left-navbar">
            <NavLink
              className={(link) => (link.isActive ? "activeNav link" : "link")}
              to={"/"}
            >
              <div className="son-one-son-right-left-navbar fdssd">Home</div>
            </NavLink>
            <NavLink
              className={(link) => (link.isActive ? "activeNav link" : "link")}
              to={"/courses"}
            >
              <div className=".tow-son-right-left-navbar fdssd">Courses</div>
            </NavLink>

            <NavLink
              className={(link) => (link.isActive ? "activeNav link" : "link")}
              to={"/aboutUs"}
            >
              <div className=".three-son-right-left-navbar fdssd">About Us</div>
            </NavLink>
            <NavLink
              className={(link) => (link.isActive ? "activeNav link" : "link")}
              to={"/pricing"}
            >
              <div className="forth-son-right-left-navbar fdssd">Pricing</div>
            </NavLink>
            <NavLink
              className={(link) => (link.isActive ? "activeNav link" : "link")}
              to={"/contact"}
            >
              <div className="five-son-right-left-navbar fdssd">Contact</div>
            </NavLink>
            {/* </div> */}
          </div>
        </div>
        <div className="right-navbar">
          <div className="left-right-navbar">Sign Up</div>
          <div className="right-right-navbar">
            <div className="son-right-right-navbar">Login</div>
          </div>
          <MenuIcon className="menu" style={{fontSize: 43}}/>
        </div>
      </div>
    </div>
  );
}
