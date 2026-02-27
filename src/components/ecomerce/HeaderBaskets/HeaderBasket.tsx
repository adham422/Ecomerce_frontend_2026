import Logo from "../../../assets/svg/cart.svg";
import styles from "./style.module.css";
const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  return (
    <div className={basketContainer}>
      <img src={Logo} alt="basket icon" />
      <div className={basketQuantity}>0</div>
    </div>
  );
};

export default HeaderBasket;
