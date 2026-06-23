function Price({ oldPrice, newPrice }) {
  const oldStyles = {
    textDecorationLine: "line-through",
    color: "#888",
    marginRight: "10px",
  };

  const newStyles = {
    fontWeight: "bold",
    color: "#e53935",
  };

  const containerStyle = {
    backgroundColor: "#e4d85a",
    padding: "8px",
    display: "inline-block",
    borderRadius: "6px",
    borderButtomLeftRadius: "14px",
    borderButtomRightRadius: "14px",
  };

  return (
    <div style={containerStyle}>
      <span style={oldStyles}>{oldPrice}</span>
      <span style={newStyles}>{newPrice}</span>
    </div>
  );
}

export default Price;
