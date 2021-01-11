import "./App.css";
import Calc from "./Calc.js";
import React, { useState } from "react";
import './index.css'

function App() {
  const [current, setCurrent] = useState(90);
  const [final, setFinal] = useState(20);
  const [pointScale, setPointScale] = useState("10");
  return (
    <div className="App">
      <h1>Final Grade Calculator</h1>
      <form className="GradeForm">
        <label>Current Grade: </label>
        <input
          type="number"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        />
        <br/>
        <label>Final Weight: </label>
        <input
          type="number"
          value={final}
          onChange={(e) => setFinal(e.target.value)}
        />
        <label>Point Scale: </label>
        <br/>
        <input type="radio" value="10" name="pointScale" onChange={(e) => setPointScale(e.target.value) } defaultChecked />10
        <input type="radio" value="7" name="pointScale" onChange={(e) => setPointScale(e.target.value)}/>7
      </form>
      <Calc current={current} final={final} pointScale={pointScale}/>
    </div>
  );
}

export default App;
