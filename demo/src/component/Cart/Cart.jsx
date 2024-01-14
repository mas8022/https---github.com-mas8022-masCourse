import "./Cart.css";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import context from "../../Context/Context";
export default function Cart({ info, button }) {
  const contextCart = useContext(context);
  useEffect(() => {
    console.log(contextCart.coursesAdded);
  }, [contextCart.coursesAdded]);
  return (
    <div className="cart" onClick={() => contextCart.setDataCourseTR(info)}>
      <div
        style={{ background: `url('${info.courseImage}')` }}
        className="dfghdfg"
      >
        <img
          onClick={contextCart.setFavCourses((p) => [...p, info])}
          className="image cart__likeBtn"
          src="../../../public/images/like.svg"
          alt="like"
        />
      </div>

      <div className="cartDetails">
        <div className="studentCountDivCart">
          <div className="studentCountDivCartFlex">
            <AccountCircleIcon style={{ fontSize: 30 }} />
            <p className="studentCount">{info.studentCount}</p>
          </div>
          <div className="satisfyCartFlex">
            <p>{info.satisPercntCourse}%</p>
            <StarBorderIcon style={{ fontSize: 30 }} />
          </div>
        </div>
        <div className="divCartName">
          <p>
            <span>{info.courseName}</span>({info.masterName})
          </p>
        </div>
        <div className="divCartPrice">
          <div className="divCartPriceFlex">
            <p className="priceCart">{info.price}$</p>
            <p className="discountCart">{info.primaryPrice}$</p>
          </div>
          {!button ? (
            <div className="asgf">
              <Link className="link" to={`/showCourse/${info.courseName}`}>
                <div onClick={() => window.scrollTo(0, 0)} className="btnCart">
                  more
                </div>
              </Link>
              <div
                onClick={() => contextCart.setCoursesAdded((p) => [...p, info])}
                className="btnCart fgsdfsdfsdd"
              >
                Add
              </div>
            </div>
          ) : (
            <div className="asgf">
              <Link className="link" to={`/showCourse/${info.courseName}`}>
                <div onClick={() => window.scrollTo(0, 0)} className="btnCart">
                  more
                </div>
              </Link>
              <div
                onClick={() =>
                  contextCart.setCoursesAdded(
                    contextCart.coursesAdded.filter(
                      (item) => item.courseName !== info.courseName
                    )
                  )
                }
                className="btnCart fgsdfsdfsdd"
              >
                Delete
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
