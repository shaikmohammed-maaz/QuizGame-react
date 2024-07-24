import "./Options.css"
export function Options(props){
    let id = (props.checkedAnswer===true && (props.uAns===props.text || props.aAns===props.text)) ? (props.aAns===props.text ? "isCorrect" : "isWrong") : "";
    return(
        <div className="alignment" id={id}>
            <>
            <input name="option" type="radio" id="OptionVal" value={props.text} onClick={()=>props.setUser(props.text)}  />
            <label >{props.text}</label>
            </>
            </div>
    );
}