import "./AdminProfile.css";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import swal from "sweetalert";
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

export default function AdminProfile() {
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    fetch("https://mascourses-back.liara.run/api/users")
      .then((res) => res.json())
      .then((data) => setAdmin(data.find((item) => item.mode === "admin")));
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

  const adminProfileEditForm = useFormik({
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
      setAdmin({
        fullName: values.fullName,
        email: values.email,
        profileImage: values.profileImage,
      });
      fetch(`https://mascourses-back.liara.run/api/users/${admin.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: values.fullName,
          email: values.email,
          profileImage: values.profileImage,
        }),
      })
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
    <div className="adminProfile">
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
                  admin.profileImage
                    ? admin.profileImage
                    : "..//images/profile.webp"
                }
                alt="profile-image"
                className="dioufhgoidsfghoigsdhio image"
              ></img>
            </div>
          </div>
          <div className="iusfgsdiahfa">
            <div className="suidgfsdoiubgoho">
              <div className="sdiufhgsioghisdo">{admin.fullName}</div>
              <div className="suidfgsdiofgsdaioaioas dsfdsadsasdaf">
                {admin.email}
              </div>
              <div className="suidfgsdiofgsdaioaioas">
                Your account is ready, you can now control the site.
              </div>
            </div>
            <div className="ssisoghsdfihiof">
              <img
                src="..//images/share.svg"
                alt="share"
                className="iufghsdisis"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="distance"></div>
      <div className="profile__route profile__edit image">
        <form
          className="profile__edit__form"
          onSubmit={adminProfileEditForm.handleSubmit}
        >
          <div className="srighia">
            <div className="aeregrwew">
              <label htmlFor="profile__edit__fullName">Full name:</label>
              <input
                name="fullName"
                value={adminProfileEditForm.values.fullName}
                onChange={adminProfileEditForm.handleChange}
                className={
                  adminProfileEditForm.errors.fullName &&
                  adminProfileEditForm.touched.fullName
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
                value={adminProfileEditForm.values.email}
                onChange={adminProfileEditForm.handleChange}
                className={
                  adminProfileEditForm.errors.fullName &&
                  adminProfileEditForm.touched.fullName
                    ? "profile__edit__input-alert"
                    : ""
                }
                id="profile__edit__email"
                type="text"
                placeholder={
                  adminProfileEditForm.errors.fullName &&
                  adminProfileEditForm.touched.fullName
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
                  handleImageChange(event, adminProfileEditForm.setFieldValue)
                }
              />
            </Button>
          </div>
          <button className="btn profile__edit__btn" type="submit">
            save
          </button>
        </form>
      </div>
    </div>
  );
}
