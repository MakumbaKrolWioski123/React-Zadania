import { useState } from "react";

const ThreeColors = () => {
    const [color, setColor] = useState("black");
    const changeColor = (newColor) => {
        setColor(newColor);
    }
    return (
        <div>
            <p style={{color}}>Tekst w roznych kolorach</p>
            <button onClick={() => changeColor("red")}>Red</button>
            <button onClick={() => changeColor("green")}>Green</button>
            <button onClick={() => changeColor("blue")}>Blue</button>
        </div>
    );
}


export default ThreeColors;