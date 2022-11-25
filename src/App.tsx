import React from 'react';
import { DiceRoller } from './Components/DiceRoller';
import { Header } from './Style/style';
import {  IAppActions, useApp } from './Hooks/useApplicationContext';
import './App.css';
import { Button } from './Style/inputStyle';
import { Menu } from './Components/Menu';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding: 0 20px;
`;

export const HamburgerButtonWrapper = styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
`;

function App() {
  const {dispatch} = useApp();

  const handleOpenMenuClick = () => {
    dispatch({type: IAppActions.OpenSettingsMenu});
  }

  return (
    <AppContainer className="App">
      <Menu />
      <Header>Dice Roller</Header>
      <HamburgerButtonWrapper>
        <Button onClick={handleOpenMenuClick}>=</Button>
      </HamburgerButtonWrapper>
      <DiceRoller />
    </AppContainer>
  );
}

export default App;
