import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { Trivia } from './components/Trivia'
import { Timer } from './components/Timer';
import { Start } from './components/Start';

function App() {
  const [username,setUsername]=useState()
  const [questionNumber,setQuestionNumber]=useState(1)
  const [stop, setStop] = useState(false);
  const [earned,setEarned] = useState(" 0$ ")


  const data = [
    {
      id: 1,
      question: "What is the capital of Bhutan?",
      answers: [
        { text: "Thimphu", correct: true },
        { text: "Kathmandu", correct: false },
        { text: "Dhaka", correct: false },
        { text: "Colombo", correct: false },
      ],
    },
    {
      id: 2,
      question: "Which scientist developed the theory of general relativity?",
      answers: [
        { text: "Isaac Newton", correct: false },
        { text: "Albert Einstein", correct: true },
        { text: "Niels Bohr", correct: false },
        { text: "Stephen Hawking", correct: false },
      ],
    },
    {
      id: 3,
      question: "In which year did the Titanic sink?",
      answers: [
        { text: "1910", correct: false },
        { text: "1912", correct: true },
        { text: "1914", correct: false },
        { text: "1916", correct: false },
      ],
    },
    {
      id: 4,
      question: "Which organ in the human body is primarily responsible for detoxification?",
      answers: [
        { text: "Heart", correct: false },
        { text: "Liver", correct: true },
        { text: "Kidney", correct: false },
        { text: "Lungs", correct: false },
      ],
    },
    {
      id: 5,
      question: "Who wrote the famous play 'Hamlet'?",
      answers: [
        { text: "Charles Dickens", correct: false },
        { text: "William Shakespeare", correct: true },
        { text: "Mark Twain", correct: false },
        { text: "Leo Tolstoy", correct: false },
      ],
    },
    {
      id: 6,
      question: "What is the smallest planet in our solar system?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: false },
        { text: "Mercury", correct: true },
        { text: "Earth", correct: false },
      ],
    },
    {
      id: 7,
      question: "Who was the first woman to win a Nobel Prize?",
      answers: [
        { text: "Marie Curie", correct: true },
        { text: "Florence Nightingale", correct: false },
        { text: "Jane Addams", correct: false },
        { text: "Rosalind Franklin", correct: false },
      ],
    },
    {
      id: 8,
      question: "What is the hardest natural substance on Earth?",
      answers: [
        { text: "Gold", correct: false },
        { text: "Iron", correct: false },
        { text: "Diamond", correct: true },
        { text: "Quartz", correct: false },
      ],
    },
    {
      id: 9,
      question: "In which year did World War I begin?",
      answers: [
        { text: "1912", correct: false },
        { text: "1914", correct: true },
        { text: "1916", correct: false },
        { text: "1918", correct: false },
      ],
    },
    {
      id: 10,
      question: "Who painted the ceiling of the Sistine Chapel?",
      answers: [
        { text: "Leonardo da Vinci", correct: false },
        { text: "Michelangelo", correct: true },
        { text: "Raphael", correct: false },
        { text: "Donatello", correct: false },
      ],
    },
    {
      id: 11,
      question: "Which element has the chemical symbol 'O'?",
      answers: [
        { text: "Osmium", correct: false },
        { text: "Oxygen", correct: true },
        { text: "Gold", correct: false },
        { text: "Iron", correct: false },
      ],
    },
    {
      id: 12,
      question: "What is the largest desert in the world?",
      answers: [
        { text: "Sahara", correct: false },
        { text: "Arabian", correct: false },
        { text: "Antarctic", correct: true },
        { text: "Gobi", correct: false },
      ],
    },
    {
      id: 13,
      question: "In which year did the Berlin Wall fall?",
      answers: [
        { text: "1985", correct: false },
        { text: "1989", correct: true },
        { text: "1991", correct: false },
        { text: "1993", correct: false },
      ],
    },
    {
      id: 14,
      question: "What is the longest river in the world?",
      answers: [
        { text: "Amazon", correct: true },
        { text: "Nile", correct: false },
        { text: "Yangtze", correct: false },
        { text: "Mississippi", correct: false },
      ],
    },
    {
      id: 15,
      question: "Who is known as the 'Father of Modern Physics'?",
      answers: [
        { text: "Isaac Newton", correct: false },
        { text: "Albert Einstein", correct: true },
        { text: "Galileo Galilei", correct: false },
        { text: "Niels Bohr", correct: false },
      ],
    },
  ];

  
  const moneyPyramid = useMemo(()=>
      [
        { id: 1,  amount: "$ 100"   },
        { id: 2,  amount: "$ 200"   },
        { id: 3,  amount: "$ 300"   },
        { id: 4,  amount: "$ 500"   },
        { id: 5,  amount: "$ 1.000" },
        { id: 6,  amount: "$ 2.000" },
        { id: 7,  amount: "$ 4.000" },
        { id: 8,  amount: "$ 8.000" },
        { id: 9,  amount: "$ 16.000"},
        { id: 10, amount: "$ 32.000"},
        { id: 11, amount: "$ 64.000"},
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

      useEffect(()=>{
        questionNumber > 1 &&
        setEarned(moneyPyramid.find((m) => m.id === questionNumber -1).amount)
      },[moneyPyramid,questionNumber]);
    
  return (
    <div className="app">
      {username ? (
     <>
      <div className="main">
        {stop ? ( <h1 className='endtext'>{username} earned: {earned}</h1>) :(

       <>
        <div className="top">
          <div className="zone">
            <div className="timer"> <Timer
                      setStop={setStop}
                      questionNumber={questionNumber}
                    />
            </div>
          </div>
        </div>
        <div className="bottom">
          <Trivia 
          data={data} 
          setStop={setStop} 
          questionNumber={questionNumber} 
          setQuestionNumber={setQuestionNumber}
          />
          </div>
        </> 
    )}
      </div>
    
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m)=>(
          <li className={questionNumber === m.id ? "moneyItem active" :  "moneyItem"}>
            <span className="moneyNumber">{m.id}</span>
            <span className="moneyAmount">{m.amount}</span>
          </li>
          ))}
         
        </ul>
      </div>
     </>
      ): <Start setUsername={setUsername}/>}
    </div>
   
  )
}

export default App
