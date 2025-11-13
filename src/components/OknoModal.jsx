import { useState } from "react";

const OknoModal = () =>
{
    const [isOpen,setIsOpen]=useState(false);
        const ToggleModal = () =>
        {
            setIsOpen(!isOpen);
        }
    return(
        <div>
            <button onClick={ToggleModal}>
                {isOpen ? "Zamknij Modal":"Otworz Modal"}
            </button>
            {isOpen && (
                <div>
                    <h2>To jest modal</h2>
                     <button onClick={ToggleModal}>Zamknij modal</button>
                </div>
            )}
        </div>
    );
}

export default OknoModal;