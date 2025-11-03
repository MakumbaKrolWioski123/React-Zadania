import { useState } from "react";
 
const Counter = () =>
{
    const[counter,setCount]=useState(0);
    return (
        <div>
            <p>Kliknięcia: {counter}</p>
            <button onClick={()=>setCount(counter+1)}>Kliknij</button>
        </div>
    );
};

export default Counter;