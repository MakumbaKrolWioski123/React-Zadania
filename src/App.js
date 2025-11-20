import 'bootstrap/dist/css/bootstrap.css'; 
import React from 'react'; 
import './App.css';
import ItemList from './components/ItemList';
import ToggleText from './components/Toggle';
import Counter from './components/Counter';
import DarkModeToggle from './components/DarkMode';
import OknoModal from './components/OknoModal';
import PasswordToggle from './components/PasswordToggle';
import TextToggle from './components/TextToggle';
import Timer from './components/Timer';

function App() { 

    return ( 

        <div> 
            <h1>Task 7</h1>
            <DarkModeToggle/> 
            <h1>Task 8</h1>
            <OknoModal/>
            <h1>Task 9</h1>
            <PasswordToggle></PasswordToggle>
            <h1>Task 10</h1>
            <TextToggle></TextToggle>
            <h1>Task 16</h1>
            <Timer></Timer>
        </div> 

    ); 

} 

 

export default App; 
