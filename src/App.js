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
import ChangeColor from './components/ChangeColor';
import Wpisz from './components/Wpisz';
import ThreeColors from './components/ThreeColors';
import AddList from './components/AddList';
import CountTo0 from './components/CountTo0';

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
            <h1>Task 17</h1>
            <ChangeColor></ChangeColor>
            <h1>Task 18</h1>
            <Wpisz></Wpisz>
            <h1>Task 19</h1>
            <ThreeColors></ThreeColors>
            <h1>Task 20</h1>
            <AddList></AddList>
            <h1>Task 21</h1>
            <CountTo0></CountTo0>
        </div> 

    ); 

} 

 

export default App; 
