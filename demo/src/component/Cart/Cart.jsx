import "./Cart.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function Cart({info}) {
  return (
    <div className="cart">
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
          <div className="btnCart">more</div>
        </div>
      </div>
    </div>
  );
}
