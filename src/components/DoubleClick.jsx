import React from 'react';

const Przycisk = ({ text="Kliknij mnie"}) => {
    return (
        <button
            onClick={() => console.log('Kliknięto przycisk')}
            onDoubleClick={() => console.log('Podwójne kliknięcie przycisku')}
            style={{
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "2px solid #000000ff"
            }}
        >
            {text}
        </button>
    );
};

export default Przycisk;