import { useState } from 'react';

export const useCounter = (initialValue = 10) => {

    const [count, setCount] = useState(initialValue);

    const reset = () => setCount(initialValue);
    const increment = (value = 1) => setCount((current) => current + value);
    const decrement = (value = 1) => count <= 0 ? setCount((current) => current) : setCount((current) => current - value);

    return {
        count,
        increment,
        decrement,
        reset
    };
};