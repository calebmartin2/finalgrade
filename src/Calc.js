// import { render } from "@testing-library/react"
import CalcFunc from "./CalcFunc.js";

function Calc(props) {
  return (
    <div className="Calc">
      <h2>Custom: {props.custom === "" ? 0 : props.custom}%</h2>
      <CalcFunc
        percent={props.custom}
        currentGrade={props.currentGrade}
        finalGrade={props.finalGrade}
      />

      <h2>A 90%:</h2>
      <CalcFunc
        percent="90"
        currentGrade={props.currentGrade}
        finalGrade={props.finalGrade}
      />

      <h2>B 80%:</h2>
      <CalcFunc
        percent="80"
        currentGrade={props.currentGrade}
        finalGrade={props.finalGrade}
      />

      <h2>C 70%:</h2>
      <CalcFunc
        percent="70"
        currentGrade={props.currentGrade}
        finalGrade={props.finalGrade}
      />

      <h2>D 60%:</h2>
      <CalcFunc
        percent="60"
        currentGrade={props.currentGrade}
        finalGrade={props.finalGrade}
      />
    </div>
  );
}
export default Calc;
