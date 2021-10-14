import React, { useState } from 'react'

function Three() {
    const [state, setstate] = useState({ age: 50, siblings: 100 })
    const { age, siblings } = state
    let changeHM = (val) => {
        setstate({
            age: age + 1,
            siblings: siblings + 1
        })
    }
    return (
        <div>
            I am {age} years old and have {siblings} siblings!
            <button onClick={changeHM}>increase health</button>
        </div>
    )
}

export default Three
