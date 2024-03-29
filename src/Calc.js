import CalcFunc from "./CalcFunc.js";
const gradeObjects = [
  { gradeLetter: "A", grade10: 90, grade7: 93, color: "#2ce574" },
  { gradeLetter: "B", grade10: 80, grade7: 85, color: "#cdf03a" },
  { gradeLetter: "C", grade10: 70, grade7: 75, color: "#ffe500" },
  { gradeLetter: "D", grade10: 60, grade7: 67, color: "#ff9600" },
];

function Calc(props) {
  return (
    <div className="Calc">
      <br />
      {gradeObjects.map((obj, index) => (
        <div key={index}>
          <h2 className="calc-header" >
            To get {obj.gradeLetter === "A" ? "an" : "a"} <span style={{ color: obj.color}}>{obj.gradeLetter} ({props.pointScale === "10" ? obj.grade10 : obj.grade7}%)</span> in the class
            you need to make a 
            <CalcFunc
              custom={props.pointScale === "10" ? obj.grade10 : obj.grade7}
              current={props.current}
              final={props.final}
              color={obj.color}
            />
             on the final exam.
          </h2>
        </div>
      ))}
    </div>
  );
}
export default Calc;
