import { useState } from "react";
import { IDiceActions, useDice } from "../Hooks/useDiceContext"
import { Button, DieSelectorTray, Select } from "../Style/inputStyle";
import { DieType } from "../types"


export const AddDieSelector = () => {
    const {dispatch} = useDice();

    const initialValue: DieType = DieType.D6;
    const [dieType, setDieType] = useState<DieType>(initialValue);
    const dieTypes:string[]  = Object.keys(DieType).filter(x => !(parseInt(x) >= 0)) as string[];

    const selectDie = (event: React.ChangeEvent<HTMLSelectElement>) => {
        // target.value is getting set to string so +x is bringing it back to a number
        setDieType(+event.target.value as DieType);
    }

    const onClick = () => {
        dispatch({type: IDiceActions.AddDie, dieType: dieType})
    }

    return (
        <DieSelectorTray>
            <Select value={dieType} onChange={selectDie} aria-label="Die Type">
                {/*@ts-ignore */}
                {(dieTypes).map((key: string) => <option key={key} value={DieType[key]}>{key}</option>)}
            </Select>
            <Button onClick={onClick}>Add Die</Button>
        </DieSelectorTray>
    );
}