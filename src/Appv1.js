import {useState} from "react";
import './index.css';


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

 export default function App() {
  return(
    <div>
      <Steps />
    </div>
  );
}

function Steps(){
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  
    function handlePrevious() {
      if (step > 1)
        setStep(step - 1);
      
    }
    function handleNext(){
      if(step < 3 ) setStep(step + 1);
      
    }
  
  
  
  
    return (
      <>
        <button className="close" onClick={() => setIsOpen(!isOpen)}>
          &times;</button>
      { isOpen && 
      <div className="steps">
        <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
        </div> 
  
  <p className="message">
    {step}: {messages[step - 1]}</p>
  <div className="buttons">
  <Button bgColor="#7958f2" 
  textColor="#fff" 
  onClick={handlePrevious} 
  >Previous <span>👈</span></Button>
  
 
  <Button bgColor="#7958f2" 
  textColor="#fff" 
  onClick={handleNext} 
  >Next <span> 👉</span></Button>
  
  </div>
  </div>
   }
      </>
    );
}

function  Button({textColor, bgColor, onClick, children}){
  return(
    <button
        style={{ backgroundColor:bgColor, 
       color:textColor}} 
       onClick={onClick}>
      {children}
    </button>
  );
}


