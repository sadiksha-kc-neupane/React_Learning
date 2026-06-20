function Product({ title, description, features = [] }) {
  // console.log(features);
  const lists = features.map((feature) => <li>{feature}</li>);
  return (
    <div className="Product">
      <h1>{title}</h1>
      <h4>{description}</h4>
      <p>{lists}</p>
    </div>
  );
}

export default Product;
