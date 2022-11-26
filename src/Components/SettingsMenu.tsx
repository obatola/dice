import React from 'react';
import styled from 'styled-components';
import { useApp } from '../Hooks/useApplicationContext';
import { IDiceActions, useDice } from '../Hooks/useDiceContext';
import { Button } from '../Style/inputStyle';
import { Header } from '../Style/style';
import { AddDieSelector } from './AddDieSelector';

const Content = styled.div`
    div {
        margin-bottom: 20px;
    }
`;

export const SettingsMenu = () => {
    const {state: appState} = useApp();
    const {dispatch: diceDispatch} = useDice();

    const handleResetBoard = () => {
        diceDispatch({type: IDiceActions.ResetBoard})
    }

    if (!appState.isMenuOpen) {
        return <></>
    }

    return (
        <div>
            <Header>Settings</Header>
            <Content>
                <div>
                    <AddDieSelector />
                </div>
                <div>
                    <Button fluid onClick={handleResetBoard}>Reset Board</Button>
                </div>
            </Content>
        </div>
    );
}