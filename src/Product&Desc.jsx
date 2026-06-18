import { Product } from "./product.jsx";
import { Description } from "./product.jsx";
import "./Product_Desc.css";

function Product_Desc() {
  return (
    <div className="Product_Desc">
      <Product />
      <Description />
      <Product />
      <Description />
      <Product />
      <Description />
    </div>
  );
}

export default Product_Desc;
