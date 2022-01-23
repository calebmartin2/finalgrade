import './index.css'

function CalcFunc(props) {
  return (
    <span className="TargetGrade" style={{backgroundColor: props.color}}>
      {Math.round(
        (((props.custom / 100 -
          (props.current / 100) * (1 - props.final / 100)) /
          (props.final / 100)) * 100 + Number.EPSILON) * 100) / 100}
    %</span>
  );
}
export default CalcFunc;
