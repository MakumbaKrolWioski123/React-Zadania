import { useState } from "react";

const ShowNumber = () => {
    const [showNumber,setShowNumber]=useState(false);
    function ToggleNumber()
    {
        setShowNumber(true);
    }
    return(
        <div>
            <p>Jan Kowalski</p>
            <button onClick={ToggleNumber}>Pokaz Numer</button>
            {showNumber && <h2>888 999 000</h2>}
        </div>
    );
            
}
export default ShowNumber;