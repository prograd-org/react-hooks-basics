import React, { useEffect, useState } from 'react'

function Five() {
    const [age, setAge] = useState(0)
    let incAge = () => {
        setAge(age + 1)
    }
    useEffect(() => {
        document.title = `I am ${age} years old!!`
    })
    return (
        <div>
            <p>Look at the title of the page</p>
            <button onClick={incAge}>Increase the age</button>
        </div>
    )
}

export default Five