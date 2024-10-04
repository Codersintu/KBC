import React, { useEffect, useState } from 'react'
import play from '../assets/play.mp3'
import correct from "../assets/correct.mp3"
import wrong from "../assets/wrong.mp3"
import useSound from 'use-sound'

export function Trivia({data,setStop,setQuestionNumber,questionNumber}) {
    const [question,setQuestion] = useState();
    const [selectedAnswer,setSelectedAnswer]= useState(null)
    const [className,setClassName] = useState("answer");
    const [playSound, { error }] = useSound(play, { volume: 1 });
    const [corectAnswer]=useSound(correct);
    const [wrongAnswer]=useSound(wrong)

    useEffect(() => {
      const playAudio = async () => {
          try {
              await playSound(); // Try to play the sound
          } catch (error) {
              console.error("Playback failed:", error);
          }
      };
      
      playAudio();
  }, [playSound]);

    useEffect(()=>{
        setQuestion(data[questionNumber-1])
    },[data,questionNumber])

    const delay = (duration, callback) =>{
      setTimeout(()=>{
        callback()
      },duration);
    }

    const handleClick = (a)=>{
      setSelectedAnswer(a);
      setClassName("answer active");
      delay(3000, () =>
         setClassName(a.correct ? "answer correct" : "answer wrong")
      );
      delay(5000,() =>{
        if (a.correct) {
            setQuestionNumber((prev) => prev +1)
        
        } else {
          
            setStop(true);
          
         
        }
      })
      setTimeOut(()=>{
      setClassName(a.correct ? "answer correct" : "answer wrong")
      },3000)
    }
  return (
    <div className="trivia">
        
        <div className="question">{question?.question}</div>
        <div className="answers">
            {question?.answers.map((a)=>(
             <div 
             className={selectedAnswer === a ? className : "answer"}
             
             onClick={()=> handleClick(a)  }
             >{a.text}</div>
            ))}
        </div>
    </div>
  )
}

