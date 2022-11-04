import React from "react";
import { IDiceActions, useDice } from "../Hooks/useDiceContext";
import { DiceTrayStyle } from "../Style/style";
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
            <button 
                type="button" 
                onClick={() => { dispatch({type: IDiceActions.RollAll})}}
            >
                Roll
            </button>
            <DiceTray dice={state.dice} />
        </div>
    )
}