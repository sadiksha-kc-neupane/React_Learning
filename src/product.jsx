import Price from "./price";
import "./Product.css";

function Product({ title, description, price, id }) {
  let oldPrices = [15999, 45999, 12999, 18999];
  let newPrices = [13999, 39999, 10999, 15999];
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{description || "No description available."}</p>
      <Price oldPrice={oldPrices[id]} newPrice={newPrices[id]} />
    </div>
  );
}

export default Product;
