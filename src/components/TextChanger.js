import { useState, useEffect } from 'react'

const TextChanger = () => {
    const [text, setText] = useState("")
    let isComplete = false;
    const txt = ["I am a full stack developer.",
                "I am a Computer Science Graduate Student.",
                
                "Thank you for visiting my portfolio."];
    let txtIndex = 0;
    let statementChangingVar = 0;
    let i = 0;

  function description() {
    if (i <= txt[txtIndex].length && !isComplete) {
      i++;
      return txt[txtIndex].substring(0,i-1);
      }
    else if (i>=txt[txtIndex].length && !isComplete) {
      isComplete = true;
      return txt[txtIndex].substring(0,i);
    }
    else if (isComplete && i!=0){
      i--;
      return txt[txtIndex].substring(0,i);
    }
    else if (isComplete && i==0){
      isComplete= false;
      statementChangingVar++;
      txtIndex = statementChangingVar % txt.length;
      return "";
  }
  };
    useEffect(() => {
        const interval = setInterval(() => setText(description()), 150);
        return () => {
          clearInterval(interval);
        };
      }, []);
    
    return (
        <p>
             {text}
        </p>
    )
}

export default TextChanger
