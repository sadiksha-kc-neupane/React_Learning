import "./App.css";
// import Title from "./Title.jsx";
import { Title } from "./Title.jsx";

function Description() {
  return <h2>This is Description</h2>;
}

let name = "diksha";
let caste = "K.C";
let score = 70;

function App() {
  return (
    <>
      <h1>This is Heading</h1>
      <Title />
      <Description />
      <h2>
        hi my name is {name} {caste} I scored {score}{" "}
      </h2>
    </>
  );
}

export default App;
