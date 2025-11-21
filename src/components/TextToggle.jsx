import { useState } from "react";

const TextToggle = () =>
{
    const [showText,isShowText]=useState(true);
        const ToggleText = () =>
        {isShowText(!showText);}
    return(
        <div>
            <button onClick={ToggleText}>
                {showText ? "Wyłącz Tekst":"Pokaż Tekst"}
            </button>
            {showText && (
                <div>
                    <p>Oto jest dodatkowy tekst</p>
                </div>
            )}
        </div>
    );
}

export default TextToggle;