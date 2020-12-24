import CalcFunc from "./CalcFunc.js";

function Calc(props) {
  return (
    <div className="Calc">
      <h2 className="calc-header" style={{backgroundColor: "#2ce574", marginTop: "0.7em"}}>Custom: {props.custom === "" ? 0 : props.custom}%</h2>
      <CalcFunc
        custom={props.custom}
        current={props.current}
        final={props.final}
      />

      <h2 className="calc-header" style={{backgroundColor: "#cdf03a"}}>A 90%:</h2>
      <CalcFunc
        custom="90"
        current={props.current}
        final={props.final}
      />

      <h2 className="calc-header" style={{backgroundColor: "#ffe500"}}>B 80%:</h2>
      <CalcFunc
        custom="80"
        current={props.current}
        final={props.final}
      />

      <h2 className="calc-header" style={{backgroundColor: "#ff9600"}}>C 70%:</h2>
      <CalcFunc
        custom="70"
        current={props.current}
        final={props.final}
      />

      <h2 className="calc-header" style={{backgroundColor: "#ff3924"}}>D 60%:</h2>
      <CalcFunc
        custom="60"
        current={props.current}
        final={props.final}
      />
    </div>
  );
}
export default Calc;
