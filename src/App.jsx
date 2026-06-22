import "./App.css";
// import Title from "./Title.jsx";
import { Title } from "./Title.jsx";
import Product_Desc from "./Product&Desc.jsx";
import Message from "./msg.jsx";

// let name = "diksha";
// let caste = "K.C";
// let score = 70;

function App() {
  return (
    <>
      <Message userName="Diksha" textColor="pink" />
      <Message userName="Dipti" textColor="Red" />
      <Message userName="Tara" textolor="green" />
      <Product_Desc />
    </>
  );
}

export default App;
