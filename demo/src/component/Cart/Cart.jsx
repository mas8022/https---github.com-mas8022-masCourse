import "./Cart.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import context from "../../Context/Context";
export default function Cart({ info, button }) {
  const contextCart = useContext(context);

  return (
    <div className="cart" onClick={() => contextCart.setDataCourseTR(info)}>
      <img src={info.courseImage} alt="courseImage" />
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
            <Link className="link" to={`/showCourse/${info.courseName}`}>
              <div onClick={() => window.scrollTo(0, 0)} className="btnCart">
                more
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
