import React from 'react';
import styled from 'styled-components';
import { IDiceActions, useDice } from "../Hooks/useDiceContext";
import { RollButton } from "../Style/inputStyle";
import { appPadding } from '../Style/style';


const Container = styled.div`
    height: 90px; 
    position: fixed; 
    bottom:0%;
    width: calc(100% - ${2 * appPadding}px);
    padding-bottom: ${appPadding}px;
    background-color: none; 
    z-index: 10;
`;

export const RollButtonTray = () => {
    const {state, dispatch} = useDice();

    return (
        <Container>
            <RollButton 
                type="button" 
                onClick={() => { dispatch({type: IDiceActions.RollAll}) }}
            >
                Roll
            </RollButton>
        </Container>
    )
}