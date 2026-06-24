function doSomething() {
  alert("You clicked the button");
}
function Button() {
  return <button onClick={doSomething}>Click me</button>;
}

export default Button;
