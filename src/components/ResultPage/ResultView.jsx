import "./ResultView.css";
import { questionData } from "../data";
export function ResultView(props) {

  function setPara(val){
    if(val==0){
      console.log(document.getElementById("Para"));
      return "Better Luck Next Time Keep Trying!"

    }else if(val==questionData.length){
      return "Wow Excellent you aced it!"
    }else{
      return "atleast you didn't get all wrong so good job bud..."
    }
  }
  return (
    <div className="resultDiv">
      <h1>Result</h1>

      <p>
        You Got <span className="para" id="Para">{props.userScore}/{questionData.length} </span> in the Quiz
      </p>
      
      <p>{setPara(props.userScore)}</p>
      <p>Here is the review of questions you answered <span className="para1"> wrong </span> or <span className="para1"> skiped </span></p>

      <div className="WrongAnswerReview">
        <h3>Worng Answered :</h3>
{props.wrongAnswerList == [] ? "No wrong Answers" : <ol>
            {props.wrongAnswerList.map((i)=>{ return <Review Question = {questionData[i].question} Answer = {questionData[i].answer} />})}
        </ol> }

        
        <h3>Skipped :</h3>
        <ol>
            {props.skippedList.map((i)=>{ return <Review Question = {questionData[i].question} Answer = {questionData[i].answer} />})}
        </ol>
      </div>

      

      <button className='NextBtn' onClick={()=>{
        location.reload();
      }}>Re-Start</button>

    </div>
  );
}

function Review(props){
    return(
        <li>
        <div>
            <p>{props.Question}</p>
            <p>{props.Answer}</p> 
        </div>
        </li>
    );
}
