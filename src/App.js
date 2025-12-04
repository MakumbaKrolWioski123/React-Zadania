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
import ShowNumber from './components/ShowNumber';
import Wiadomosc from './components/Wiadomosc';
import ListaMiast from './components/ListaMiast';
import ListaClick from './components/ListaClick';
import ListGlowContainer from './components/ListGlow';
import ListGlowContainer2 from './components/ListGlow2';
import Licznik from './components/Licznik';


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
            <h1>Task 11</h1>
           <ShowNumber></ShowNumber>
            <h1>Task 12</h1>
            <Wiadomosc></Wiadomosc>
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
            <h1>Zadania zakladka 07</h1>
            <h1>Task 1</h1>
            <ListaMiast></ListaMiast>
            <h2>Task 2</h2>
            <ListaClick></ListaClick>
            <h1>Zadania zakladka 08</h1>
            <h1>Task 1</h1>
            <ListGlowContainer></ListGlowContainer>
            <h1>Task 2</h1>
            <ListGlowContainer2></ListGlowContainer2>
            <h1>Zadania zakladka 09</h1>
            <h1>Task 1</h1>
            <Licznik></Licznik>
            
        </div> 

    ); 

} 

 

export default App; 
