import "./App.css";
// import Title from "./Title.jsx";
import { Title } from "./Title.jsx";

function Description() {
  return <h2>This is Description</h2>;
}

function App() {
  return (
    <>
      <h1>This is Heading</h1>
      <Title />
      <Description />
    </>
  );
}

export default App;
