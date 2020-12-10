import './App.css';
import Calc from './Calc.js';
import React, { useState } from 'react';



function App() {
  const [current, setCurrent] = useState(90);
  const [final, setFinal] = useState(20);
  const [custom, setCustom] = useState(100);
  return (
    <div className="App">
      <h1>Final Grade Calculator</h1>
      <form>
        <label>
          Current Grade:
            </label>

        <input
          type="number"
          value={current}
          onChange={e => setCurrent(e.target.value)}
        />
        <br></br>
        <label>
          Final Weight            </label>
        <input
          type="number"
          value={final}
          onChange={e => setFinal(e.target.value)}
        />
        <br></br>
        <label>
          Custom Goal            </label>
        <input
          type="number"
          value={custom}
          onChange={e => setCustom(e.target.value)}
        />
      </form>
      <Calc currentGrade={current} finalGrade={final} custom={custom} />
    </div>
  );
}

export default App;
