import Price from "./price";
import "./Product.css";

function Product({ title, description, price, id }) {
  let oldPrices = [15999, 45999, 12999, 18999];
  let newPrices = [13999, 39999, 10999, 15999];
  let descriptions = [
    "High-performance gaming processor built for extreme multitasking and smooth FPS gameplay.",
    "Next-gen graphics card with ray tracing support and ultra-fast rendering performance.",
    "Ultra-speed DDR5 RAM kit designed for heavy gaming and professional workloads.",
    "High-speed NVMe SSD with massive storage and lightning-fast boot times.",
  ];
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{descriptions[id - 1] || "No description available."}</p>
      <Price oldPrice={oldPrices[id - 1]} newPrice={newPrices[id - 1]} />
    </div>
  );
}

export default Product;
