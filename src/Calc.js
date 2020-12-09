// import { render } from "@testing-library/react"
function Calc(props) {

    

    return (
        <div className="Calc">
            {/* <h1>currentGrade: {props.currentGrade}</h1>
            <h1>finalGrade: {props.finalGrade}</h1> */}
            {/* <h1>pointScale: {props.pointScale}</h1> */}
            <h2>Custom: {props.custom}%</h2>
            <h3>{(((props.custom / 100) - (props.currentGrade / 100) * (1 - (props.finalGrade / 100))) / (props.finalGrade / 100)) * 100}%</h3>

            <h2>90%:</h2>
            <h3>{((.9 - (props.currentGrade / 100) * (1 - (props.finalGrade / 100))) / (props.finalGrade / 100)) * 100}%</h3>

            <h2>80%:</h2>
            <h3>{((.8 - (props.currentGrade / 100) * (1 - (props.finalGrade / 100))) / (props.finalGrade / 100)) * 100}%</h3>

            <h2>70%:</h2>
            <h3>{((.7 - (props.currentGrade / 100) * (1 - (props.finalGrade / 100))) / (props.finalGrade / 100)) * 100}%</h3>

            <h2>60%:</h2>
            <h3>{((.6 - (props.currentGrade / 100) * (1 - (props.finalGrade / 100))) / (props.finalGrade / 100)) * 100}%</h3>


        </div>
    )
}
export default Calc