import './index.css'

function CalcFunc(props) {
  if (props.current !== "" && props.final !== "") {
    return (
      <span className='CalcOutput'>
        {Math.round(
          (((props.custom / 100 -
            (props.current / 100) * (1 - props.final / 100)) /
            (props.final / 100)) * 100 + Number.EPSILON) * 100) / 100}
      </span>
    );
  } else {
    return <h3 className='CalcError'>Input is blank.</h3>;
  }
}
export default CalcFunc;
