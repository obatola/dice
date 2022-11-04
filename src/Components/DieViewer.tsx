import React from "react"
import { IDiceActions, useDice } from "../Hooks/useDiceContext"
import { DieWrapper } from "../Style/d6Style"
import { DieType, IDie } from "../types"
import { D4Dice } from "./D4Dice"
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
            {getCorrectDieImage(die)}
        </DieWrapper>
    )
}

const getCorrectDieImage = (die: IDie): React.ReactNode => {
    switch (die.type) {
        case DieType.D4:
            return (<D4Dice die={die}/>)
        case DieType.D6:
            return (<D6Dice die={die}/>)
        default:
            return (<D6Dice die={die}/>)
    }
    
}
