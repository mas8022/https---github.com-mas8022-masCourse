import "./Profile.css";
import "./Profile-media.css";
import { useState, useContext, useEffect } from "react";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import swal from "sweetalert";
import context from "../../Context/Context";

export default function Profile() {
  const contextProfile = useContext(context);
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const [userId, setUserId] = useState(null);
  

  useEffect(() => {
   
      setUserId(() => {
        fetch("http://localhost:4000/api/users")
        .then(res => res.json())
        .then(data => {
          let findUser = data.find(user => user.email === contextProfile.user.email)
          if (findUser) {
            setUserId(findUser.id)
            console.log(findUser.id);
          }
        })
      })

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
      console.log({fullName: values.fullName,
        email: values.email,
        profileImage: values.profileImage});
      fetch(`http://localhost:4000/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: values.fullName,
          email: values.email,
          profileImage: values.profileImage,
        }),
      }).then((res) => console.log(res)).catch(err => console.log(err))
      swal("Success", "edit complete successfully", "success");
      setTimeout(() => {
        setSubmitting(false);
        values.fullName = "";
        values.email = "";
        values.profileImage = "";
      }, 3000);
    },
  });

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
                    : "../../../public/images/profile.webp"
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
              <div className="suidfgsdiofgsdaioaioas">
                Your account is ready, you can now apply for advice.
              </div>
            </div>
            <div className="ssisoghsdfihiof">
              <img
                src="../../../public/images/share.svg"
                alt="share"
                className="iufghsdisis"
              />
            </div>
          </div>
        </div>
      </div>
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
        <div className="profile__route profile__favorite image">
          <img src="../../../public/images/sad.svg" alt="sad-icon" />
          <span>No exist favorite course</span>
        </div>
      )}
      {profileRouteActive === "courses" && (
        <div className="profile__route profile__courses image">
          <img src="../../../public/images/sad.svg" alt="sad-icon" />
          <span>You not have any courses</span>
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
    </>
  );
}
