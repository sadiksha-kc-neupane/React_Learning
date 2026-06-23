import Product from "./product.jsx";
import "./Product_Desc.css";

function Product_Desc() {
  return (
    <div className="Product_Desc">
      <Product id={1} title="NovaCore X7 Gaming Processor" />

      <Product id={2} title="TitanForce RTX 980 Graphics Card" />

      <Product id={3} title="HyperSpeed 32GB DDR5 RAM Kit" />

      <Product id={4} title="QuantumVault 2TB NVMe SSD" />
    </div>
  );
}

export default Product_Desc;
