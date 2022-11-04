import React from "react"
import { IDiceActions, useDice } from "../Hooks/useDiceContext"
import { DieWrapper } from "../style"
import { IDie } from "../types"
import { D6Dice } from "./D6Dice"

interface IDieViewer {
    dieID: string
}

export const DieViewer = ({dieID} : IDieViewer) => {
    const {state, dispatch} = useDice();
    const die: IDie | undefined = state.dice.get(dieID);

    if (!die) {
        return <></>;
    }

    const handleRemove = () => {
        dispatch({type: IDiceActions.RemoveDie, id: dieID})
    }

    const handleToggleFreeze = () => {
        dispatch({type: IDiceActions.ToggleFreeze, id: dieID})
    }

    return (
        <DieWrapper>
            <button type="button" onClick={handleRemove}>remove</button>
            <button type="button" onClick={handleToggleFreeze}>toggleFreeze</button>
            <D6Dice die={die}/>
        </DieWrapper>
    )
}