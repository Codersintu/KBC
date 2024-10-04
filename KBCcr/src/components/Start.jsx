import React, { useRef } from 'react'

export function Start({setUsername}) {
    const inputRef=useRef();

   const handleClick=()=>{
    inputRef.current.value && setUsername(inputRef.current.value)
   }
    

    return (
      <div className="start">
        <input type="text" className='startinput' placeholder='KBC' ref={inputRef} />
        <button className="btn" onClick={handleClick}>Start</button>
      </div>
    )
}
