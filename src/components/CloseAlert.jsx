import { useState } from "react"; 

const Alert = ({ message, onClose }) => { 
    return ( 
        <div className="alert alert-warning alert-dismissible"> 
            {message} 
        </div> 
    ); 

}; 
const Alert1 = () => { 
    const [alertVisible, setAlertVisible] = useState(false); 
    const handleClose = () => {
        setAlertVisible(false);
    };

    const handleShowAlert = () => {
        setAlertVisible(true);
        setTimeout(() => {
            setAlertVisible(false);
        }, 3000);
    };

    return (
        <div>
            {alertVisible && <Alert message="Uwaga zamykam sie za 3 sec!" onClose={handleClose} />}
            <button className="btn btn-primary" onClick={handleShowAlert}>
                Pokaż Alert
            </button>
        </div>
    );
}; 
export default Alert1;