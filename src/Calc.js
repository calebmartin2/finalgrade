// import { render } from "@testing-library/react"
import CalcFunc from './CalcFunc.js'
function Calc(props) {
    return (
        <div className="Calc">
            {/* <h1>currentGrade: {props.currentGrade}</h1>
            <h1>finalGrade: {props.finalGrade}</h1> */}
            {/* <h1>pointScale: {props.pointScale}</h1> */}
            <h2>Custom: {props.custom}%</h2>
            <CalcFunc percent={props.custom} currentGrade={props.currentGrade} finalGrade={props.finalGrade}/>

            <h2>90%:</h2>
            <CalcFunc percent='90' currentGrade={props.currentGrade} finalGrade={props.finalGrade}/>

            <h2>80%:</h2>
            <CalcFunc percent='80' currentGrade={props.currentGrade} finalGrade={props.finalGrade}/>

            <h2>70%:</h2>
            <CalcFunc percent='70' currentGrade={props.currentGrade} finalGrade={props.finalGrade}/>

            <h2>60%:</h2>
            <CalcFunc percent='60' currentGrade={props.currentGrade} finalGrade={props.finalGrade}/>
        </div>
    )
}
export default Calc