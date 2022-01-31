import React, { useState } from 'react'

export default  function Four() {
    const [count, setCount] = useState(0)
    return (
        <div>
            Count is {count}
            <div>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(count => count + 1)}>Add +</button>
                <button onClick={() => setCount(count => count - 1)}>Substract -</button>
            </div>
        </div>
    )
}

