import React from "react";
import { IDiceActions, useDice } from "../Hooks/useDiceContext";
import { IDiceCollection } from "../types";
import { AddDieSelector } from "./AddDieSelector";
import { DieViewer } from "./DieViewer";

const DiceTray = ({dice}: {dice: IDiceCollection}) => (
    <>
        {dice.keySeq().toJSON().map((key) => <DieViewer key={key} dieID={key} />)}
    </>
)

export const DiceRoller = () => {
    const {state, dispatch} = useDice();

    return (
        <div>
            <DiceTray dice={state.dice} />
            <AddDieSelector />
            <button 
                type="button" 
                onClick={() => { dispatch({type: IDiceActions.RollAll})}}
            >
                Roll
            </button>
        </div>
    )
}