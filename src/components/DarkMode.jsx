import { useState } from "react";

const DarkModeToggle = () =>
{
    const [isDarkMode,setIsDarkMode]=useState(false);
        const toggleDarkMode = () =>
        {
            setIsDarkMode(!isDarkMode);
        }
    return(
        <div className={isDarkMode ? "dark-mode" : "light-mode"}>
            <button onClick={toggleDarkMode}>
                {isDarkMode ? "Tryb jasny":"Tryb ciemny"}
            </button>
        </div>
    );
}

export default DarkModeToggle;