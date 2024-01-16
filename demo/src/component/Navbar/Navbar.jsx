import "./Navbar.css";
import "./Navbar-media.css";
import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import InfoIcon from "@mui/icons-material/Info";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CallIcon from "@mui/icons-material/Call";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import context from "../../Context/Context";
export default function Navbar() {
  const contextNavbar = useContext(context);
  const [flag, setFlag] = useState(false);

  return (
    <>
      <div className={`side sidebar ${flag && "side sidebarActive"}`}>
        <ClearIcon
          onClick={() => setFlag(false)}
          className="clearIconSidebar"
          style={{ fontSize: 45 }}
        />

        {contextNavbar.logFlag ? (
          <Link to={'/profile'} className="link asdg"><img
            className="image hgsfdc"
            src="../../../public/images/profile.webp"
          /></Link>
          
        ) : (
          <div className="loginProfile">
            <div
              onClick={() => {
                contextNavbar.setModalMode("login");
                contextNavbar.setModal(true);
              }}
              className="sidebarLoginBtn"
            >
              Login
            </div>
          </div>
        )}

        <div className="selectBoxSidebar">
          <NavLink
            to={"/"}
            className={(link) =>
              link.isActive ? "routerSidebar link des" : "link des"
            }
          >
            <div>
              <span>Home</span> <HomeIcon style={{ fontSize: 30 }} />
            </div>
          </NavLink>
          <NavLink
            to={"/courses"}
            className={(link) =>
              link.isActive ? "routerSidebar link des" : "link des"
            }
          >
            <div>
              <span>Courses</span>
              <VideoLibraryRoundedIcon style={{ fontSize: 30 }} />
            </div>
          </NavLink>

          <NavLink
            to={"/aboutUs"}
            className={(link) =>
              link.isActive ? "routerSidebar link des" : "link des"
            }
          >
            <div>
              <span>About Us</span>
              <InfoIcon style={{ fontSize: 30 }} />
            </div>
          </NavLink>
          <NavLink
            to={"/pricing"}
            className={(link) =>
              link.isActive ? "routerSidebar link des" : "link des"
            }
          >
            <div>
              <span>Pricing</span>
              <CurrencyExchangeIcon style={{ fontSize: 30 }} />
            </div>
          </NavLink>
          <NavLink
            to={"/contact"}
            className={(link) =>
              link.isActive ? "routerSidebar link des" : "link des"
            }
          >
            <div>
              <span>Contact</span>
              <CallIcon style={{ fontSize: 30 }} />
            </div>
          </NavLink>
        </div>
        <div className="logo">
          <FlashOnIcon style={{ fontSize: 56, rotate: "20deg" }} />
          <h2>MAS-COURSE</h2>
        </div>
      </div>

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
                className={(link) =>
                  link.isActive ? "activeNav link" : "link"
                }
                to={"/"}
              >
                <div className="son-one-son-right-left-navbar fdssd">Home</div>
              </NavLink>
              <NavLink
                className={(link) =>
                  link.isActive ? "activeNav link" : "link"
                }
                to={"/courses"}
              >
                <div className=".tow-son-right-left-navbar fdssd">Courses</div>
              </NavLink>

              <NavLink
                className={(link) =>
                  link.isActive ? "activeNav link" : "link"
                }
                to={"/aboutUs"}
              >
                <div className=".three-son-right-left-navbar fdssd">
                  About Us
                </div>
              </NavLink>
              <NavLink
                className={(link) =>
                  link.isActive ? "activeNav link" : "link"
                }
                to={"/pricing"}
              >
                <div className="forth-son-right-left-navbar fdssd">Pricing</div>
              </NavLink>
              <NavLink
                className={(link) =>
                  link.isActive ? "activeNav link" : "link"
                }
                to={"/contact"}
              >
                <div className="five-son-right-left-navbar fdssd">Contact</div>
              </NavLink>
            </div>
          </div>

          {contextNavbar.logFlag ? (
            <div className="weefref">
              <Link to={"/profile"}>
                <img
                  src={
                    contextNavbar.user.profileImage
                      ? contextNavbar.user.profileImage
                      : "../../../public/images/profile.webp"
                  }
                  alt="profile-image"
                  className="Profile image"
                ></img>
              </Link>
              <MenuIcon
                onClick={() => setFlag(true)}
                className="menu"
                style={{ fontSize: 43 }}
              />
            </div>
          ) : (
            <div className="right-navbar">
              <div className="dfraeg">
                <div
                  onClick={() => {
                    contextNavbar.setModalMode("sign");
                    contextNavbar.setModal(true);
                  }}
                  className="left-right-navbar"
                >
                  Sign Up
                </div>
                <div
                  onClick={() => {
                    contextNavbar.setModalMode("login");
                    contextNavbar.setModal(true);
                  }}
                  className="right-right-navbar"
                >
                  <div className="son-right-right-navbar">Login</div>
                </div>
              </div>
              <MenuIcon
                onClick={() => setFlag(true)}
                className="menu"
                style={{ fontSize: 43 }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
