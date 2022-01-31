import React, { useState } from "react";
export default function Second(){
    const[age,setAge]=useState(19);
    const[siblingNum,setSbilingNum]=useState(10);
    const handelClick=()=>{
        setAge(age+1)
    }
    const sibiling=()=>{
        setSbilingNum(siblingNum+1)
    }
    return(
        <>
        <p>Today I am {age} Years of Age</p>
        <p>I have {siblingNum} siblings</p>
        <button onClick={handelClick}>Get age</button>
        <button onClick={sibiling}>get sinling</button>
        </>
    )
}