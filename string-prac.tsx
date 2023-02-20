"use client";

import { useState } from "react";

export default function Home() {
  // const val = "hello";
  const [val , setVal ] = useState("");
  const [val2 , setVal2 ] = useState("")
  const onChangehandler =(e : any ) => {
    console.log ("e is" ,e.target.value)
    setVal(e.target.value)
  }
  const onChangehandler2 =(e : any ) => {
    console.log ("e is" ,e.target.value)
    setVal2(e.target.value)
  }
  return ( <>
  
  
  <input type ="text"  value={val} onChange = {onChangehandler} />
  <input type ="text"  value={val2} onChange = {onChangehandler2} />
  <br />
  lenght of string 1: {val.length}
  <br />
  
  lenght of string 2: {val2.length}
  
  </>
  );
}
