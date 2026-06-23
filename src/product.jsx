import Price from "./price";
import "./Product.css";

function Product({ title, description, price, id }) {
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{description || "No description available."}</p>
      <Price oldPrices={123} newPrices={1234} />
    </div>
  );
}

export default Product;
