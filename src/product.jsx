import Price from "./price";
import "./Product.css";

function Product(title, description, price) {
  return (
    <div className="Product">
      <h3>Title</h3>
      <p>Description</p>
      <Price />
    </div>
  );
}

export default Product;
