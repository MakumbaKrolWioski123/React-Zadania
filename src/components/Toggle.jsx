import { useState } from "react";
 
const ToggleText = () => {
 
 const [tekst, przelacztekst] = useState(true);
 
 return (
    <div>
         <p>{tekst ? "Witaj Świecie!" : " Hello World!"}</p>
         <button onClick={() => przelacztekst(!tekst)}>Przełącz</button>

    </div>
 
 );
};

export default ToggleText;