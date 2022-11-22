import React from "react";
import styled from 'styled-components';
import { IDiceActions, useDice } from "../Hooks/useDiceContext";
import { RollButton } from "../Style/inputStyle";
import { DiceTrayStyle, Spacer } from "../Style/style";
import { IDiceCollection } from "../types";
import { AddDieSelector } from "./AddDieSelector";
import { DieViewer } from "./DieViewer";
import { RollButtonTray } from "./RollButtonTray";

const Container = styled.div``

const DiceTray = ({dice}: {dice: IDiceCollection}) => (
    <DiceTrayStyle>
        {dice.keySeq().toJSON().map((key) => <DieViewer key={key} dieID={key} />)}
    </DiceTrayStyle>
)

export const DiceRoller = () => {
    const {state} = useDice();

    return (
        <div>
            <Container>
                <DiceTray dice={state.dice} />
            </Container>
            <RollButtonTray />
        </div>
    )
}