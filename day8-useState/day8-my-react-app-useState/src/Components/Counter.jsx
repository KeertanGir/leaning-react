import { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0);
     //     ↑          ↑               ↑
    //   value    update fn      starting value 

    return ( 
        <div>
            <h1>Count : { count }</h1>
            <button onClick={ () => setCount( count + 1 )} >+1</button>
            <button onClick={() => setCount(prev => prev > 0 ? prev - 1 : 0)}>-1</button>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
     );
}
 
export default Counter;