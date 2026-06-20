import Product from "./product.jsx";
import "./Product_Desc.css";

function Product_Desc() {
  // let features = ["hitech", "fast", "durable"];
  let features2 = {
    a: "This is durable",
    b: "This is fast",
    c: "This has 1 year waranty",
  };
  return (
    <div className="Product_Desc">
      <Product
        title={"laptop"}
        description={"This is Asus Zenbook  i5 model with 8/256 gb storage"}
        features2={features2.a}
      />
      <Product title={"TV"} description={"This is a Smart TV"} />
      <Product
        title={"Smart Board"}
        description={"This is Smart Board ,with OPS, i7"}
      />
    </div>
  );
}

export default Product_Desc;
