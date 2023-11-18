import React, { useState } from 'react';

export default function CountButton() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        if (count < 10) {
            setCount(count + 1);
        } else {
            setCount(0);
        }
    };

    return (
        <div>
            <button onClick={incrementCount}>+1</button>
            <div>{count}</div>
        </div>
    );
}
