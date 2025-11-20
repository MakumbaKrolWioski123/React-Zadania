import { useState } from "react";

const CountTo0 = () => {
    const [count, setCount] = useState(10);
    const zmniejsz = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button style={{color:"red", backgroundColor:"green",borderColor:"blue"}}onClick={zmniejsz}>Zmniejsz</button>
        </div>
    );
}

export default CountTo0;