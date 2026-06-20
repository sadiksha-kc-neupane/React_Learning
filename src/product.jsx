function Product({ title, description, features }) {
  console.log(features);
  return (
    <div className="Product">
      <h1>{title}</h1>
      <h4>{description}</h4>
      <p>{features}</p>
    </div>
  );
}

export default Product;
