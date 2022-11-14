import React from "react";
import { IDiceActions, useDice } from "../Hooks/useDiceContext";
import { RollButton } from "../Style/inputStyle";
import { DiceTrayStyle, Spacer } from "../Style/style";
import { IDiceCollection } from "../types";
import { AddDieSelector } from "./AddDieSelector";
import { DieViewer } from "./DieViewer";

const DiceTray = ({dice}: {dice: IDiceCollection}) => (
    <DiceTrayStyle>
        {dice.keySeq().toJSON().map((key) => <DieViewer key={key} dieID={key} />)}
    </DiceTrayStyle>
)

export const DiceRoller = () => {
    const {state, dispatch} = useDice();

    return (
        <div>
            <AddDieSelector />
            <Spacer />
            <RollButton 
                type="button" 
                onClick={() => { dispatch({type: IDiceActions.RollAll})}}
            >
                Roll
            </RollButton>
            <Spacer />
            <DiceTray dice={state.dice} />
        </div>
    )
}