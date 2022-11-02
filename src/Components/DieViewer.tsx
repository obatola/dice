import React from "react"
import { IDiceActions, useDice } from "../Hooks/useDiceContext"
import { IDie } from "../types"

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

    return (
        <div>
            <button type="button" onClick={handleRemove}>remove</button>
            <div>Number Sides: {die.type}</div>
            <div>Value: {die.value}</div>
            <div>. . . . . . . .</div>
        </div>
    )
}