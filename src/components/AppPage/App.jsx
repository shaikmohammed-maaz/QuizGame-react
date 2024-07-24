import { useState } from 'react'
import {questionData} from "../data.js"
import {QuestionComponent} from "../question/Question.jsx"
import { ResultView } from '../ResultPage/ResultView.jsx'
import './App.css'

let worngAnswers = []
let skippedList = []

export function App() {
const [result, showresult] = useState(false)
const [index,setIndex] = useState(0);
const [userScore,setScore] = useState(0);
const [userAnswer , setUserAnswer] = useState("");
const[resultText, setResultText] = useState("");
const[checkedAnswer,setCheckedAnswer] = useState(false);

function CheckAnswer(userAnswer){
  if(userAnswer===questionData[index].answer){
    setScore(userScore+1)
    setResultText("Right Answer")
  }
    document.getElementById('checkBtn').disabled = true;
}



  return (
    <>
    <div > 
      {!result ? 
      <div id='MainDiv'>
        

      <h1 >Quiz Game</h1>
      <QuestionComponent checkedAnswer={checkedAnswer}  QuestionNumber = {index+1} QuestionText = {questionData[index].question} OptionTextArray = {questionData[index].options} setUser = {setUserAnswer}  uAns = {userAnswer} aAns = {questionData[index].answer} ></QuestionComponent>

      <button id='checkBtn' className={resultText!="" ? 'checkBtnDisable' : 'checkBtn'} onClick={()=>{
        CheckAnswer(userAnswer);
        setCheckedAnswer(true);
      }}>Check</button>


      <button className='NextBtn' onClick={()=>{
        if(index==(questionData.length)-1){
          showresult(true);
        }
        else{
              setIndex(index+1);
        }
        if(userAnswer != questionData[index].answer  && userAnswer != ""){
          worngAnswers.push(index)
          setResultText("Wrong Answer")
        }else{
          skippedList.push(index)
        }

        setResultText("");
        setCheckedAnswer(false)
        document.getElementById('checkBtn').disabled = false;
      }}> {index!=(questionData.length)-1 ? "Next" : "Result"}

        </button>

<button className='NextBtn' onClick={()=>{
        location.reload();
      }}>Reset</button>



        
</div> : <div id='resultDiv' onClick={()=>{
  document.getElementById("Para").style = 'color:red';
}}> <ResultView wrongAnswerList = {worngAnswers} skippedList = {skippedList} userScore = {userScore} />
</div>
 }
     
    




    </div>
    </>
  )
}

