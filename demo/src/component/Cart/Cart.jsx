import "./Cart.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarBorderIcon from "@mui/icons-material/StarBorder";
export default function Cart() {
  return (
    <div className="cart">
      <img src="../../../public/images/courseImage.webp" alt="courseImage" />
      <div className="cartDetails">
        <div className="studentCountDivCart">
          <div className="studentCountDivCartFlex">
            <AccountCircleIcon style={{ fontSize: 30 }} />
            <p className="studentCount">2504</p>
          </div>
          <div className="satisfyCartFlex">
            <p>93%</p>
            <StarBorderIcon style={{ fontSize: 30 }} />
          </div>
        </div>
        <div className="divCartName">
          <p>
            <span>javascript</span>(Mohammadamin Saidirad)
          </p>
        </div>
        <div className="divCartPrice">
          <div className="divCartPriceFlex">
            <p className="priceCart">50$</p>
            <p className="discountCart">50$</p>
          </div>
          <div className="btnCart">more</div>
        </div>
      </div>
    </div>
  );
}
