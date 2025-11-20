import { useState } from "react";

const ThreeColors = () => {
    const [color, setColor] = useState("black");
    const changeColor = (newColor) => {
        setColor(newColor);
    }
    return (
        <div>
            <p style={{color}}>Tekst w roznych kolorach</p>
            <button style={{backgroundColor:"red",color:"white"}} onClick={() => changeColor("red")}>Red</button>
            <button style={{backgroundColor:"green",color:"white"}} onClick={() => changeColor("green")}>Green</button>
            <button style={{backgroundColor:"blue",color:"white"}} onClick={() => changeColor("blue")}>Blue</button>
        </div>
    );
}


export default ThreeColors;