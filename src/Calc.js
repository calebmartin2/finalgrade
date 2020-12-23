import CalcFunc from "./CalcFunc.js";

function Calc(props) {
  return (
    <div className="Calc">
      <h2>Custom: {props.custom === "" ? 0 : props.custom}%</h2>
      <CalcFunc
        custom={props.custom}
        current={props.current}
        final={props.final}
      />

      <h2>A 90%:</h2>
      <CalcFunc
        custom="90"
        current={props.current}
        final={props.final}
      />

      <h2>B 80%:</h2>
      <CalcFunc
        custom="80"
        current={props.current}
        final={props.final}
      />

      <h2>C 70%:</h2>
      <CalcFunc
        custom="70"
        current={props.current}
        final={props.final}
      />

      <h2>D 60%:</h2>
      <CalcFunc
        custom="60"
        current={props.current}
        final={props.final}
      />
    </div>
  );
}
export default Calc;
