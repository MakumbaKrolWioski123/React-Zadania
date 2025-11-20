import { useState } from "react";

function randomColor() {
   return '#' + Math.floor(Math.random()*16777215).toString(16);
}

const ChangeColor = () => {
    const [bgColor, setBgColor] = useState(randomColor);
    const changeBackgroundColor = () => {
        const newColor = randomColor();
        setBgColor(newColor);
        document.body.style.backgroundColor = newColor;
    }
   
    return (
        <div>
            <button onClick={changeBackgroundColor}>
                Change Color
            </button>
        </div>
    );
}
export default ChangeColor;