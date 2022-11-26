import React, { useState } from "react";

import { IDiceActions, useDice } from "../Hooks/useDiceContext"
import { Button, DieSelectorTray, Select } from "../Style/inputStyle";
import { DieType } from "../types"


interface IDieTypeSelectorProps {
    dieType: DieType;
    onSelectDie: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    name?: string;
}

export const DieTypeSelector = ({dieType, onSelectDie, name}: IDieTypeSelectorProps) => {
    const dieTypes:string[]  = Object.keys(DieType).filter(x => !(parseInt(x) >= 0)) as string[];

    return (
        <Select value={dieType} onChange={onSelectDie} aria-label="Die Type" name={name}>
            {/*@ts-ignore */}
            {(dieTypes).map((key: string) => <option key={key} value={DieType[key]}>{key}</option>)}
        </Select>
    );
}

export const AddDieSelector = () => {
    const {dispatch} = useDice();

    const initialValue: DieType = DieType.D6;
    const [dieType, setDieType] = useState<DieType>(initialValue);

    const selectDie = (event: React.ChangeEvent<HTMLSelectElement>) => {
        // target.value is getting set to string so +x is bringing it back to a number
        setDieType(+event.target.value as DieType);
    }

    const onClick = () => {
        dispatch({type: IDiceActions.AddDie, dieType: dieType})
    }

    return (
        <DieSelectorTray>
            <DieTypeSelector dieType={dieType} onSelectDie={selectDie} />
            <Button onClick={onClick}>Add Die</Button>
        </DieSelectorTray>
    );
}