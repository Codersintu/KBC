import React, { useEffect, useState } from 'react'

export function Timer({setStop,questionNumber}) {
    const [timer,setTimer] =useState(30)

    useEffect(() => {
        if (timer === 0) return setStop(true);
        const interval = setInterval(() => {
          setTimer((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
      }, [timer, setStop]);
    
      useEffect(() => {
        setTimer(30);
      }, [questionNumber]);
      return timer;
}

