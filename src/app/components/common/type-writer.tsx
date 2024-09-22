"use client"

import { useEffect, useState } from "react"

interface ITypeWriter {
    words: string[]
}

export default function TypeWriter({words}: ITypeWriter){
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [index, setIndex] = useState(0);
    const [speed, setSpeed] = useState(200);

    useEffect(() => {
        const handleTyping = () => {
          const currentWord = words[loopNum % words.length];
    
          if (isDeleting) {
            setText(currentWord.substring(0, index - 1));
            setIndex(index - 1);
            setSpeed(100);
          } else {
            setText(currentWord.substring(0, index + 1));
            setIndex(index + 1);
            setSpeed(200);
          }
    
          if (!isDeleting && index === currentWord.length) {
            setTimeout(() => setIsDeleting(true), 500);
          } else if (isDeleting && index === 0) {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
          }
        };
    
        const timer = setTimeout(handleTyping, speed);
    
        return () => clearTimeout(timer);
      }, [index, isDeleting, loopNum, speed]);

    return (
        <div className='pl-2 w-full'>
            <span  >{text}</span>
            <span className="cursor animate-[blink_1s_step-end_infinite]" >|</span>
        </div>
  
    )
}