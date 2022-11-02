import { useState } from "react";
import { IDiceActions, useDice } from "../Hooks/useDiceContext"
import { DieType } from "../types"


export const AddDieSelector = () => {
    const {dispatch} = useDice();

    const initialValue: DieType = DieType.D6;
    const [dieType, setDieType] = useState<DieType>(initialValue);
    const dieTypes:string[]  = Object.keys(DieType).filter(x => !(parseInt(x) >= 0)) as string[];

    const selectDie = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDieType(event.target.value as unknown as DieType);
    }

    const onClick = () => {
        dispatch({type: IDiceActions.AddDie, dieType: dieType})
        setDieType(initialValue);
    }

    return (
        <div>
            <select value={dieType} onChange={selectDie} aria-label="Die Type">
                {/*@ts-ignore */}
                {(dieTypes).map((key: string) => <option key={key} value={DieType[key]}>{key}</option>)}
            </select>
            <button onClick={onClick}>Add Die</button>
        </div>
    );
}