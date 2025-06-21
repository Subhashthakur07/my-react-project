import {useState} from 'react';
export default function Counter(){
    const [count, setCount] = useState(0);
    let incCount=()=>{
        setCount(count+1);
    }
    return(
        <>
        <h2>count={count}</h2>
        <button onClick={incCount}>increase count</button>
        </>
    );
} 