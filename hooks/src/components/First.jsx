import React, { useState } from 'react'

function First() {
    const [age, setAge] = useState(0)
    let incAge = () => {
        setAge(age + 1)
    }
    return (
        <div>
            I am {age} years of age!
            <button onClick={incAge}>Click</button>
        </div>
    )
}

export default First
