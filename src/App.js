import "./App.css";
import Calc from "./Calc.js";
import React, { useState } from "react";
import './index.css'
import GithubCorner from './content/github-corner-right.svg'

function App() {
  const [current, setCurrent] = useState(90);
  const [final, setFinal] = useState(20);
  const [pointScale, setPointScale] = useState("10");
  return (
    <div className="App">
      <h1>Final Grade Calculator</h1>
      <form className="GradeForm">
        <label>Current Grade:</label>
        <br />
        <input
          className="GradeNumberInput"
          type="number"
          placeholder={current}
          min="1"
          onChange={(e) => setCurrent(e.target.value)}
        />
        <br />
        <label>Final Weight:</label>
        <br />
        <input
          className="GradeNumberInput"
          type="number"
          placeholder={final}
          min="1"
          onChange={(e) => setFinal(e.target.value)}
        />
        <br />
        <label>Point Scale:</label>
        <br />
        <input type="radio" value="10" name="pointScale" onChange={(e) => setPointScale(e.target.value)} defaultChecked /><span className="GradeInputPointLabel">10</span>
        <input type="radio" value="7" name="pointScale" onChange={(e) => setPointScale(e.target.value)} /><span className="GradeInputPointLabel">7</span>
      </form>
      {(current !== "" || final !== "")
        ? <Calc current={current} final={final} pointScale={pointScale} />
        : <h1 className="CalcError">Input is blank.</h1>
      }
      {/* Github Corner from https://github.com/tholman/github-corners */}
      <a href="https://github.com/calebmartin2/finalgrade"><img src={GithubCorner} alt='GitHub Corner' className="GithubCorner"></img></a>
    </div>
  );
}

export default App;
