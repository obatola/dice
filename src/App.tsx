import React from 'react';
import { DiceRoller } from './Components/DiceRoller';
import './App.css';
import { DiceContextProvider } from './Hooks/useDiceContext';
import { Header } from './Style/style';

function App() {
  return (
    <div className="App">
      <DiceContextProvider>
        <Header>Dice Roller</Header>
        <DiceRoller />
      </DiceContextProvider>
    </div>
  );
}

export default App;
