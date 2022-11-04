import React from 'react';
import { DiceRoller } from './Components/DiceRoller';
import './App.css';
import { DiceContextProvider } from './Hooks/useDiceContext';

function App() {
  return (
    <div className="App">
      <DiceContextProvider>
        <DiceRoller />
      </DiceContextProvider>
    </div>
  );
}

export default App;
