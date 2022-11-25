import React, { useState } from "react"
import { IAppActions, useApp } from "../Hooks/useApplicationContext"
import { IDiceActions, useDice } from "../Hooks/useDiceContext"
import { DieWrapper } from "../Style/d6Style"
import { Button } from "../Style/inputStyle"
import { DieOptionPanel } from "../Style/style"
import { DieType, IDie, InputSize, InputType } from "../types"
import { D10Dice } from "./D10Dice"
import { D12Dice } from "./D12Dice"
import { D20Dice } from "./D20Dice"
import { D4Dice } from "./D4Dice"
import { D6Dice } from "./D6Dice"
import { D8Dice } from "./D8Dice"

interface IDieViewer {
    dieID: string;
    hideOptions?: boolean;
}

export const DieViewer = ({dieID, hideOptions} : IDieViewer) => {
    const {state, dispatch} = useDice();
    const {state: appState, dispatch: appDispatch} = useApp();

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

    const handleOpenCustomizationPage = () => {
        appDispatch({type: IAppActions.OpenDiceCustomizationMenu, dieID })
    }

    return (
        <DieWrapper onMouseEnter={handeMouseEnter} onMouseLeave={handleMouseLeave}>
            { (shouldShowOptions && !hideOptions) && (
                <DieOptionPanel>
                    <Button type="button" onClick={handleRemove} size={InputSize.small} inputType={InputType.danger}>x</Button>
                    <Button type="button" onClick={handleToggleFreeze} size={InputSize.small} inputType={InputType.freeze}>{die.isFrozen ? 'UnFreeze' : 'Freeze'}</Button>
                    <Button type="button" onClick={handleOpenCustomizationPage} size={InputSize.small}>c</Button>
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
        case DieType.D12:
            return (<D12Dice die={die}/>)
        case DieType.D20:
            return (<D20Dice die={die}/>)
        default:
            return (<D6Dice die={die}/>)
    }
    
}
