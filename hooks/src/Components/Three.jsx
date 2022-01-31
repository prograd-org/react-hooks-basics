import React, { useState } from "react";
export default function Three(){
    const[state,setstate]=useState({age:50,sibling:100})
    const{age,sibling}=state// declaring age 
    const change=()=>{
        setstate({age:age+1,sibling:sibling+1})
    }
    return(
        <>
        <p>i am {age} years old and have {sibling} siblings</p>
        <button onClick={change}>get both</button>
        </>
    )
}