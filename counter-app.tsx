"use client"
import React, { useState } from "react";

export default function CounterApp () {
    const [ counter ,setCounter] = useState (0);
    const decrement = () => {
      console.log("in derement")
      setCounter(counter-1)
    };
    const increment = () => {
      console.log("in incement")
      setCounter(counter+1)
    };
    return (<>
   <button onClick = {decrement }> decrement </button>
   {counter}
   <button onClick = {increment }> increment </button>
   </>);
 
 }

