import './index.css'

function CalcFunc(props) {
  if (props.currentGrade !== "" && props.finalGrade !== "") {
    return (
      <h3 className='CalcOutput'>
        {Math.round(
          (((props.percent / 100 -
            (props.currentGrade / 100) * (1 - props.finalGrade / 100)) /
            (props.finalGrade / 100)) *
            100 +
            Number.EPSILON) *
            100
        ) / 100}
        %
      </h3>
    );
  } else {
    return <h3 className='CalcError'>Input is blank.</h3>;
  }
}
export default CalcFunc;
