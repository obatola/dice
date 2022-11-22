import React from 'react';
import styled from 'styled-components';
import { IAppActions, useApp } from '../Hooks/useApplicationContext';
import { Button } from '../Style/inputStyle';
import { Header, Spacer } from '../Style/style';
import { InputType } from '../types';
import { AddDieSelector } from './AddDieSelector';

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
        <div>
            <Header>Settings</Header>
            <div>
                <AddDieSelector />
            </div>
        </div>
    );
}