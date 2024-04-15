import React, { useState } from "react";

const Counter = () => {

    const [start, setstart] = useState(0);
    const [change1, setchange] = useState('');
    const count = () => {
        setstart(start + (1))
    }

    const change = (event) => {
        setchange(event.target.value)
    }
    return (
        <div>
            <p>
                clicked{start}
            </p>
            <p>{change1}</p>
            <input placeholder="Enter your name" onChange={change}></input>
            <button onClick={count} className="btn">click</button>
        </div>
    )
}
export default Counter



