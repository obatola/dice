import React, { useState } from "react"
import { IDiceActions, useDice } from "../Hooks/useDiceContext"
import { DieWrapper } from "../Style/d6Style"
import { DieOptionPanel } from "../Style/style"
import { DieType, IDie } from "../types"
import { D10Dice } from "./D10Dice"
import { D4Dice } from "./D4Dice"
import { D6Dice } from "./D6Dice"
import { D8Dice } from "./D8Dice"

interface IDieViewer {
    dieID: string
}

export const DieViewer = ({dieID} : IDieViewer) => {
    const {state, dispatch} = useDice();
    const [shouldShowOptions, setShouldShowOptions] = useState(false);
    
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

    const handeMouseEnter = () => {
        setShouldShowOptions(true);
    }

    const handleMouseLeave = () => {
        setShouldShowOptions(false);
    }

    return (
        <DieWrapper onMouseEnter={handeMouseEnter} onMouseLeave={handleMouseLeave}>
            { shouldShowOptions && (
                <DieOptionPanel>
                    <button type="button" onClick={handleRemove}>x</button>
                    <button type="button" onClick={handleToggleFreeze}>{die.isFrozen ? 'UnFreeze' : 'Freeze'}</button>
                </DieOptionPanel>
            )}
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
        case DieType.D8:
            return (<D8Dice die={die}/>)
        case DieType.D10:
            return (<D10Dice die={die}/>)
        default:
            return (<D6Dice die={die}/>)
    }
    
}
