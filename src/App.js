import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ShowCount from "./components/ShowCount";
import Button from "./components/Button";

function App() {
  //let counter = 0;
  const [counter, setCounter] = useState(0);
  const incrementFunction = () => {
    setCounter(counter + 1);
    //counter++;
  };
  const decrementFunction = () => {
    setCounter(counter - 1);
    //counter--;
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Counter app</h1>
        <ShowCount counter={counter} />
        <div className="buttons">
          <Button
            handleClick={incrementFunction}
            buttonId={"increment-button"}
            content={"+"}
          />
          <Button
            handleClick={decrementFunction}
            buttonId={"decrement-button"}
            content={"-"}
          />

          {/* <button onClick={incrementFunction} id="increment-button">
            +
          </button>
          <button onClick={decrementFunction} id="decrement-button">
            -
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
