import { useState, useContext, useEffect } from "react";
import "../Product/Product.css";
import "./Users.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import context from "../../../Context/Context";
import swal from "sweetalert";

export default function Users() {
  const contextCmsProducts = useContext(context);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [userId, setUserId] = useState(null);
  const [cmsUsersSearch, setCmsUsersSearch] = useState("");
  const [cmsUsersShow, setCmsUsersShow] = useState(contextCmsProducts.allUsers);
  const [mode, setMode] = useState("user");

  useEffect(() => {
    setCmsUsersShow(
      contextCmsProducts.allUsers.filter((user) =>
        user.fullName.includes(cmsUsersSearch)
      )
    );
  }, [cmsUsersSearch]);

  useEffect(() => {
    console.log(cmsUsersShow);
  },[cmsUsersShow])

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const deletesInput = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setProfileImage("");
  };

  const registerHandler = () => {
    fetch("https://mascourses-back.liara.run/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        password,
        profileImage,
        mode,
      }),
    }).then((res) => {
      if (res.ok) {
        swal({
          title: "Success",
          text: "You user added successfully",
          icon: "success",
          button: "ok",
        }).then(() => deletesInput());
      }
    });
  };

  const editHandler = () => {
    fetch(`https://mascourses-back.liara.run/api/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        password,
        profileImage,
        mode,
      }),
    }).then((res) => {
      if (res.ok) {
        swal({
          title: "Success",
          text: "You user edit successfully",
          icon: "success",
          button: "ok",
        }).then(() => deletesInput());
      }
    });
  };

  const deleteHandler = () => {
    fetch(`https://mascourses-back.liara.run/api/users/${userId}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        swal({
          title: "Success",
          text: "You user delete successfully",
          icon: "success",
          button: "ok",
        }).then(() => deletesInput());
      }
    });
  };

  return (
    <div className="cms__courses fsadfsdafsad">
      <div className="cms__productList">
        <div className="cms__courses__searchBar">
          <input
            value={cmsUsersSearch}
            onChange={(e) => setCmsUsersSearch(e.target.value)}
            type="text"
            placeholder="Search user fullname..."
          />
          <img className="image" src="/images/search.svg" alt="search-btn" />
        </div>

        <div className="cms__coursesList">
          {cmsUsersShow.length ? (
            cmsUsersShow.map((user) => (
              <>
                <div
                  onClick={() => {
                    setFullName(user.fullName);
                    setEmail(user.email);
                    setPassword(user.password);
                    setProfileImage(user.profileImage);
                    setUserId(user.id);
                    setMode(user.mode)
                  }}
                  className="cms__user__box"
                >
                  <img
                    className="image cms__user__box__profileImage"
                    src={
                      user.profileImage
                        ? user.profileImage
                        : "..//images/profile.webp"
                    }
                    alt="user-profile-image"
                  />
                  <p className="cms__user__box__userFullName">
                    fullname: <span> {user.fullName}</span>
                  </p>
                  <p className="cms__user__box__userEmail">
                    email: <span> {user.email}</span>
                  </p>
                  <p className="cms__user__box__userPassword">
                    password: <span> {user.password}</span>
                  </p>
                  <p className="cms__user__box__createAt">
                    createAt: <span> {user.date}</span>
                  </p>
                </div>
              </>
            ))
          ) : (
            <div className="sdhdfgdsfsd">No user here...</div>
          )}
        </div>
      </div>

      <form action="#">
        <div className="dfgsdfgdsf">
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            name="courseName"
            type="text"
            placeholder="fullname"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="masterName"
            type="text"
            placeholder="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="price"
            type="text"
            placeholder="password"
          />

          <div className="dfgfe">
            <Button
              className="upLouder"
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload user Profile
              <VisuallyHiddenInput
                type="file"
                name="profileImage"
                accept="image/*"
                filename={profileImage}
                onChange={handleImageChange}
              />
            </Button>
          </div>

          <div className="character">
            <div
              onClick={() => setMode("admin")}
              className={
                mode === "admin"
                  ? "character__item character__item--active"
                  : "character__item"
              }
            >
              ADMIN
            </div>
            <div
              onClick={() => setMode("user")}
              className={
                mode === "user"
                  ? "character__item character__item--active"
                  : "character__item"
              }
            >
              USER
            </div>
          </div>
        </div>

        <div className="iugshugsho">
          <div onClick={() => registerHandler()}>register</div>
          <div onClick={() => editHandler()}>edit</div>
          <div onClick={() => deleteHandler()}>delete</div>
        </div>
      </form>
    </div>
  );
}
