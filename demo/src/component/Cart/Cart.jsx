import "./Cart.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import context from "../../Context/Context";
import swal from "sweetalert";
export default function Cart({ info, button, btns, like }) {
  const contextCart = useContext(context);
  return (
    <div className="cart" onClick={() => contextCart.setDataCourseTR(info)}>
      <div
        style={{ background: `url('${info.courseImage}')` }}
        className="dfghdfg"
      >
        {!like ? (
          <img
            onClick={() => {
              contextCart.setFavCourses((perv) => [...perv, info]);
              swal({
                icon: "success",
                text: "successfully",
                buttons: false,
                timer: 700,
              });
            }}
            className="image cart__likeBtn"
            src="../../../public/images/like.svg"
            alt="like"
          />
        ) : null}
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
                onClick={() => {
                  contextCart.setCoursesAdded((p) => [...p, info]);
                  swal({
                    icon: "success",
                    text: "successfully",
                    buttons: false,
                    timer: 700,
                  });
                }}
                className="btnCart fgsdfsdfsdd"
              >
                Add
              </div>
            </div>
          ) : (
            <div className="asgf">
              {!btns ? (
                <>
                  <Link className="link" to={`/showCourse/${info.courseName}`}>
                    <div
                      onClick={() => window.scrollTo(0, 0)}
                      className="btnCart"
                    >
                      more
                    </div>
                  </Link>
                  {like ? (
                    <>
                      <div
                        onClick={() =>
                          contextCart.setFavCourses(
                            contextCart.favCourses.filter(
                              (item) => item.courseName !== info.courseName
                            )
                          )
                        }
                        className="btnCart fgsdfsdfsdd"
                      >
                        Delete
                      </div>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
