import "./Profile.css";
import "./Profile-media.css";
import { useState, useContext, useEffect } from "react";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import swal from "sweetalert";
import context from "../../Context/Context";
import FlexCourses from "../../component/FlexCourses/FlexCourses";
import { Link } from "react-router-dom";

export default function Profile() {
  const contextProfile = useContext(context);
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const [userId, setUserId] = useState(null);
  const [userMode, setUserMode] = useState();

  useEffect(() => {
    setUserId(() => {
      fetch("https://mascourses-back.liara.run/api/users")
        .then((res) => res.json())
        .then((data) => {
          let findUser = data.find(
            (user) => user.email === contextProfile.user.email
          );
          if (findUser) {
            setUserMode(findUser.mode);
            setUserId(findUser.id);
          }
        });
    });
  }, []);

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

  const [profileRouteActive, setProfileRouteActive] = useState("edit");

  const handleImageChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFieldValue("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const profileEditForm = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      profileImage: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.fullName.length) {
        errors.fullName = "write your full name";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "write your email correctly";
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      contextProfile.setUser({
        fullName: values.fullName,
        email: values.email,
        password: values.password,
        profileImage: values.profileImage,
      });

      fetch(`https://mascourses-back.liara.run/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: values.fullName,
          email: values.email,
          profileImage: values.profileImage,
        }),
      });
      swal("Success", "edit complete successfully", "success");
      setTimeout(() => {
        setSubmitting(false);
        values.fullName = "";
        values.email = "";
        values.profileImage = "";
      }, 3000);
    },
  });

  const logoutHandler = () => {
    swal({
      icon: "warning",
      title: "Logout",
      text: "Are you sure to log out the site",
      buttons: true,
    }).then((res) => {
      if (res) {
        fetch(
          `https://mascourses-back.liara.run/api/users/${contextProfile.user.id}`,
          {
            method: "DELETE",
          }
        ).then((res) => {
          if (res.ok) {
            contextProfile.setUser({});
            contextProfile.setLogFlag(false);
            window.location.pathname = "/";
          }
        });
      }
    });
  };

  return (
    <>
      <div className="profile__header">
        <div className="difhdsihsfdio">
          <div className="uidhsdiofhdsiudk">
            <div className="dfsgidubfuisfd">
              <img
                className="fdsuighfiugfhifd"
                src="https://via.placeholder.com/180x180"
              />
              <img
                src={
                  contextProfile.user.profileImage
                    ? contextProfile.user.profileImage
                    : "/images/profile.webp"
                }
                alt="profile-image"
                className="dioufhgoidsfghoigsdhio image"
              ></img>
            </div>
          </div>
          <div className="iusfgsdiahfa">
            <div className="suidgfsdoiubgoho">
              <div className="sdiufhgsioghisdo">
                {contextProfile.user.fullName}
              </div>
              <div className="suidfgsdiofgsdaioaioas dsfdsadsasdaf">
                {contextProfile.user.email}
              </div>
              <div className="suidfgsdiofgsdaioaioas adsfdsa">
                Your account is ready, you can now apply for advice.
              </div>
            </div>
            <div className="ssisoghsdfihiof">
              <img
                onClick={logoutHandler}
                src="/images/logout.svg"
                alt="logout button"
                className="iufghsdisis"
              />
            </div>
          </div>
        </div>
      </div>
      {userMode === "admin" && (
        <>
          <div className="distance"></div>
          <Link to={"/cms/homeCms"} className="link">
            <div className="logAdminPanel">Admin Panel</div>
          </Link>
        </>
      )}
      <div className="divHr"></div>

      <ul className="profile__routes">
        <li
          className={
            profileRouteActive === "edit" ? "profile__routes-active" : ""
          }
          onClick={() => setProfileRouteActive("edit")}
        >
          Edit
        </li>
        <li
          className={
            profileRouteActive === "courses" ? "profile__routes-active" : ""
          }
          onClick={() => setProfileRouteActive("courses")}
        >
          Courses
        </li>
        <li
          className={
            profileRouteActive === "favorites" ? "profile__routes-active" : ""
          }
          onClick={() => setProfileRouteActive("favorites")}
        >
          Favorites
        </li>
      </ul>

      <div className="distance"></div>

      {profileRouteActive === "favorites" && (
        <div>
          {contextProfile.favCourses.length ? (
            <FlexCourses
              button={true}
              infos={contextProfile.favCourses}
              like={true}
            />
          ) : (
            <div className="profile__route profile__favorite image">
              <img src="/images/sad.svg" alt="sad-icon" />
              <span>No exist favorite course</span>
            </div>
          )}
        </div>
      )}
      {profileRouteActive === "courses" && (
        <div>
          {contextProfile.coursesAdded.length ? (
            <FlexCourses button={true} infos={contextProfile.coursesAdded} />
          ) : (
            <div className="profile__route profile__courses image">
              <img src="/images/sad.svg" alt="sad-icon" />
              <span>You not have any courses</span>
            </div>
          )}
        </div>
      )}
      {profileRouteActive === "edit" && (
        <div className="profile__route profile__edit image">
          <form
            className="profile__edit__form"
            onSubmit={profileEditForm.handleSubmit}
          >
            <div className="srighia">
              <div className="aeregrwew">
                <label htmlFor="profile__edit__fullName">Full name:</label>
                <input
                  name="fullName"
                  value={profileEditForm.values.fullName}
                  onChange={profileEditForm.handleChange}
                  className={
                    profileEditForm.errors.fullName &&
                    profileEditForm.touched.fullName
                      ? "profile__edit__input-alert"
                      : ""
                  }
                  id="profile__edit__fullName"
                  type="text"
                  placeholder="write your full name"
                />
              </div>
              <div className="aeregrwew">
                <label htmlFor="profile__edit__email">Email:</label>
                <input
                  name="email"
                  value={profileEditForm.values.email}
                  onChange={profileEditForm.handleChange}
                  className={
                    profileEditForm.errors.fullName &&
                    profileEditForm.touched.fullName
                      ? "profile__edit__input-alert"
                      : ""
                  }
                  id="profile__edit__email"
                  type="text"
                  placeholder={
                    profileEditForm.errors.fullName &&
                    profileEditForm.touched.fullName
                      ? "write your email correctly"
                      : "write your email"
                  }
                />
              </div>
              <Button
                className="upLouder"
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  onChange={(event) =>
                    handleImageChange(event, profileEditForm.setFieldValue)
                  }
                />
              </Button>
            </div>
            <button className="btn profile__edit__btn" type="submit">
              save
            </button>
          </form>
        </div>
      )}
      <div className="distance"></div>
    </>
  );
}
