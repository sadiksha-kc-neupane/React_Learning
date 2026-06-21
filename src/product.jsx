function Product({ title, description, price }) {
  // console.log(features);
  // const lists = features.map((feature) => <li>{feature}</li>);

  return (
    <div className="Product">
      <h1>{title}</h1>
      <h4>{description}</h4>
      {price > 30000 && <p>Discount is 5%</p>}
    </div>
  );
}

export default Product;
