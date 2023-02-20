"use client"
import React, { useState } from "react";

export default function CounterAppAdvance () {
    const [ counter ,setCounter] = useState (0);

    const decrement = (kitna = -1) => {
      console.log("in derement")
      setCounter(counter - kitna)
    };
   
    
    const increment = (kitna = 1 ) => {
      console.log("in incement")
      setCounter(counter+ kitna)
    };
    
    
    return (<>
   <button onClick = {() =>decrement (3) }> decrement by 3</button>
   <button onClick = {() =>decrement (2)}> decrement by 2</button>
   <button onClick = {() =>decrement (1)}> decrement </button>
   {counter}
   <button onClick = {() =>increment (1) }> increment  </button>
   <button onClick = {() =>increment (2)}> increment by 2</button>
   <button onClick = {() =>increment (3)}> increment by 3 </button>
   </>);
 
 }