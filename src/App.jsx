import "./App.css";

function Title() {
  return <h1>This is title</h1>;
}

function Description() {
  return <h2>This is Description</h2>;
}

function App() {
  return (
    <div>
      <h1>This is Heading</h1>
      <Title />
      <Description />
    </div>
  );
}

export default App;
