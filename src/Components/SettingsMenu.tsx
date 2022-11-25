import React from 'react';
import styled from 'styled-components';
import { IAppActions, useApp } from '../Hooks/useApplicationContext';
import { IDiceActions, useDice } from '../Hooks/useDiceContext';
import { Button } from '../Style/inputStyle';
import { Header, Spacer } from '../Style/style';
import { AddDieSelector } from './AddDieSelector';
import { DieSetHandler } from './DieSetHandler';

const Content = styled.div`
    div {
        margin-bottom: 20px;
    }
`;

export const SettingsMenu = () => {
    const {state: appState, dispatch: appDispatch} = useApp();
    const {dispatch: diceDispatch} = useDice();

    const handleCloseMenu = () => {
        appDispatch({type: IAppActions.CloseMenu});
    }

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
                <div>
                    {/* <DieSetHandler /> */}
                </div>
            </Content>
        </div>
    );
}