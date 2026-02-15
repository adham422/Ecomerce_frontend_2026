import { Button } from "react-bootstrap";
import styles from "./style.module.css";
const { product, productImg } = styles;

const Product = () => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img
          src="https://cdn-eu.dynamicyield.com/api/9876644/images/244c68ad42d8b__hp-w12-22032022-h_m-women_shirts-blouses.jpg"
          alt=" Error in img"
        />
      </div>
      <h2>Title</h2>
      <h3>10 EGP</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;