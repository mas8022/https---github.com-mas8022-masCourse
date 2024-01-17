import { useState, useContext, useEffect } from "react";
import "./Product.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Cart from "../../../component/Cart/Cart";
import context from "../../../Context/Context";
import swal from "sweetalert";

export default function Product() {
  const contextCmsProducts = useContext(context);
  const [courseName, setCourseName] = useState("");
  const [masterName, setMasterName] = useState("");
  const [price, setPrice] = useState("");
  const [primaryPrice, setPrimaryPrice] = useState("");
  const [courseImage, setCourseImage] = useState("");
  const [courseDescribe, setCourseDescribe] = useState("");
  const [url, setUrl] = useState("");
  const [courseId, setCourseId] = useState(null);
  const [cmsProductSearch, setCmsProductSearch] = useState("");
  const [cmsProductShow, setCmsProductShow] = useState(contextCmsProducts.allCourses);

  useEffect(() => {
    setCourseName(contextCmsProducts.dataCourseTR.courseName);
    setMasterName(contextCmsProducts.dataCourseTR.masterName);
    setPrice(contextCmsProducts.dataCourseTR.price);
    setPrimaryPrice(contextCmsProducts.dataCourseTR.primaryPrice);
    setCourseImage(contextCmsProducts.dataCourseTR.courseImage);
    setCourseDescribe(contextCmsProducts.dataCourseTR.courseDescribe);
    setUrl(contextCmsProducts.dataCourseTR.url);
    setCourseId(contextCmsProducts.dataCourseTR.id);
  }, [contextCmsProducts.dataCourseTR]);

  useEffect(() => {
    setCmsProductShow(contextCmsProducts.allCourses.filter(item => item.courseName.includes(cmsProductSearch)))
  },[cmsProductSearch])

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
        setCourseImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const deletesInput = () => {
    setCourseName("");
    setMasterName("");
    setPrice("");
    setPrimaryPrice("");
    setCourseImage("");
    setCourseDescribe("");
    setUrl("");
  };

  const registerHandler = () => {
    fetch("http://localhost:4000/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courseName,
        masterName,
        price,
        primaryPrice,
        studentCount: 0,
        satisPercntCourse: 0,
        courseImage,
        courseDescribe,
        url,
      }),
    }).then((res) => {
      if (res.ok) {
        swal({
          title: "Success",
          text: "You course added successfully!",
          icon: "success",
          button: "ok",
        }).then(() => deletesInput());
      }
    });
  };

  const editHandler = () => {
    fetch(`http://localhost:4000/api/courses/${courseId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courseName,
        masterName,
        price,
        primaryPrice,
        studentCount: 0,
        satisPercntCourse: 0,
        courseImage,
        courseDescribe,
        url,
      }),
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        swal({
          title: "Success",
          text: "You course added successfully!",
          icon: "success",
          button: "ok",
        }).then(() => deletesInput());
      }
    });
  };

  const deleteHandler = () => {
    fetch(`http://localhost:4000/api/courses/${courseId}`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        swal({
          title: "Success",
          text: "You course delete successfully!",
          icon: "success",
          button: "ok",
        }).then(() => deletesInput());
      }
    });
  };

  return (
    <div className="cms__courses">
      <div className="cms__productList">
        <div className="cms__courses__searchBar">
          <input
            value={cmsProductSearch}
            onChange={(e) => setCmsProductSearch(e.target.value)}
            type="text"
            placeholder="Search course..."
          />
          <img
            className="image"
            src="../../../../public/images/search.svg"
            alt="search-btn"
          />
        </div>

        <div className="cms__coursesList">
          {cmsProductShow.length ? (
            cmsProductShow.map((course, index) => (
              <Cart
                button={true}
                btns={true}
                className="astsaaas"
                key={index}
                info={course}
                onClick
                like={true}
              />
            ))
          ) : (
            <div className="sdhdfgdsfsd">No courses here...</div>
          )}
        </div>
      </div>

      <form action="#">
        <input
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          name="courseName"
          type="text"
          placeholder="courseName"
        />
        <input
          value={masterName}
          onChange={(e) => setMasterName(e.target.value)}
          name="masterName"
          type="text"
          placeholder="masterName"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          name="price"
          type="text"
          placeholder="price"
        />
        <input
          value={primaryPrice}
          onChange={(e) => setPrimaryPrice(e.target.value)}
          name="primaryPrice"
          type="text"
          placeholder="primaryPrice"
        />

        <div className="dfgfe">
          <Button
            className="upLouder"
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload Cover
            <VisuallyHiddenInput
              type="file"
              name="profileImage"
              accept="image/*"
              filename={courseImage}
              onChange={handleImageChange}
            />
          </Button>
          <Button
            className="upLouder"
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload Video
            <VisuallyHiddenInput
              name="url"
              type="file"
              filename={url}
              onChange={handleVideoChange}
              placeholder="course video"
              accept="video/*"
            />
          </Button>
        </div>

        <textarea
          value={courseDescribe}
          onChange={(e) => setCourseDescribe(e.target.value)}
          name="courseDescribe"
          type="text"
          placeholder="describe"
        />
        <div className="iugshugsho">
          <div onClick={() => registerHandler()}>register</div>
          <div onClick={() => editHandler()}>edit</div>
          <div onClick={() => deleteHandler()}>delete</div>
        </div>
      </form>
    </div>
  );
}
