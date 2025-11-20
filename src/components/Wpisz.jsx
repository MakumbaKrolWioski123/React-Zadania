import { useState } from "react";

const Wpisz = () => {
    const [text, setText] = useState("Wpisz coś");
    const handleChange = (event) => {
        setText(event.target.value);
    }
    return (
        <div>
            <input type="text" onChange={handleChange} />
            <p>{text}</p>
        </div>
    );
}

export default Wpisz;