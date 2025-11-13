import { useState } from "react";

const PasswordToggle = () =>
{
    const [isPassword,setIsPassword]=useState(false);
    return(
        <div>
           <input type={isPassword ? "Text":"Password"} placeholder="Wpisz Hasło"/>
           <button onClick={()=>setIsPassword(!isPassword)}>
            {isPassword ? "Schowaj hasło":"Pokaz haslo"}
           </button>
        </div>
    );
}

export default PasswordToggle;