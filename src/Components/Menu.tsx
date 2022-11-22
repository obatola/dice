import React from 'react';
import styled from 'styled-components';
import { IAppActions, useApp } from '../Hooks/useApplicationContext';
import { Button } from '../Style/inputStyle';
import { Header, inputColors, Spacer } from '../Style/style';
import { InputType } from '../types';
import { AddDieSelector } from './AddDieSelector';

const MenuBackground = styled.div`
    position: fixed;
    z-index: 20;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(75, 56, 44, 0.7);
`;

const MenuWrapper = styled.div`
    background-color: ${inputColors.menu.background};
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
`;

const CloseButton = styled(Button)`
        float: right;
`;

export const Menu = () => {
    const {state, dispatch} = useApp();

    const handleCloseMenu = () => {
        dispatch({type: IAppActions.CloseMenu});
    }

    if (!state.isMenuOpen) {
        return <></>
    }

    return (
        <MenuBackground>
            <MenuWrapper>
                <CloseButton inputType={InputType.danger} onClick={handleCloseMenu}>X</CloseButton>
                <Header>Settings</Header>
                <div>
                    <AddDieSelector />
                </div>
            </MenuWrapper>
        </MenuBackground>
    );
}