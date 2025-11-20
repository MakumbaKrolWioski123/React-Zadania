import { useEffect, useState } from "react";


const Timer = () =>
{
    const [timer,updateTimer]=useState(0);
    const [isActive,setisActive]=useState(null);
     const Start =()=>
     { 
            const czas = setInterval(() => {
            updateTimer(prevTime => prevTime + 1);
            }, 1000);
            setisActive(czas);
     }
     const Stop = () =>
        {
            clearInterval(isActive);  
            setisActive(null);
        }
    return(
        <div>
            <p>{timer}</p>
            <button onClick={Start}>
                Start
            </button>
            <button onClick={Stop}>
                Stop
            </button >
        </div>
    );
}

export default Timer;

