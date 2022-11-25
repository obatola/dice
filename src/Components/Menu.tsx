import React from 'react';
import styled from 'styled-components';
import { IAppActions, MenuTypes, useApp } from '../Hooks/useApplicationContext';
import { Button } from '../Style/inputStyle';
import { borderRadius, colors, Header, inputColors, Spacer } from '../Style/style';
import { InputType } from '../types';
import { AddDieSelector } from './AddDieSelector';
import { DieCustomizationMenu } from './DieCustomizationMenu';
import { SettingsMenu } from './SettingsMenu';

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
    margin: 15% auto;
    padding: 20px;
    border: 4px solid ${inputColors.button.border};
    border-radius: ${borderRadius};
    width: 80%;
    box-shadow: 15px 15px 0px 0px;
`;

const CloseButton = styled(Button)`
        float: right;
`;

export const MenuSelector = () => {
    const {state, dispatch} = useApp();
    
    console.log({menuType: state.menuType});

    switch (state.menuType) {
        case MenuTypes.DieCustomization:
            return <DieCustomizationMenu />
        case MenuTypes.Settings: 
        default:
            return <SettingsMenu />
    }
}

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
                <MenuSelector />
            </MenuWrapper>
        </MenuBackground>
    );
}