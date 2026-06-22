function Product({ title, description, price }) {
  // console.log(features);
  // const lists = features.map((feature) => <li>{feature}</li>);
  let isDiscount = price > 30000;
  let styles = { backgroundColor: isDiscount ? "pink" : "" };
  return (
    <div className="Product" style={styles}>
      <h1>{title}</h1>
      <h4>{description}</h4>
      {isDiscount && <p>Discount is 5%</p>}
    </div>
  );
}

export default Product;
