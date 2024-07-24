import { Options } from "../options/Options";
import "./Question.css"
export function QuestionComponent(props){
    return(
    <div className="questionStyle">
        <h3> <span>{props.QuestionNumber}.</span> {props.QuestionText}</h3>
            {props.OptionTextArray.map((element)=>{
           return <Options checkedAnswer={props.checkedAnswer} key={element} text = {element} setUser = {props.setUser}  uAns={props.uAns} aAns = {props.aAns}/>;
            })}
    </div>
    );
}