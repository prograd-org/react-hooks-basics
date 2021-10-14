import React, { useState } from 'react'

function Second() {
    const [age, setAge] = useState(19)
    const [siblings, setSiblings] = useState(4)
    let incAge = () => {
        setAge(age + 1)
    }
    let incSib = () => {
        setSiblings(siblings + 1)
    }
    return (
        <div>
            I am {age} years old and have {siblings} siblings!
            <button onClick={incAge}>Get older</button>
            <button onClick={incSib}>Get more siblings</button>
        </div>
    )
}

export default Second
