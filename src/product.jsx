function Product({ title, description, features2 }) {
  // console.log(features);
  return (
    <div className="Product">
      <h1>{title}</h1>
      <h4>{description}</h4>
      <p>{features2}</p>
    </div>
  );
}

export default Product;
