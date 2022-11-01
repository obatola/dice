import { useState } from "react";
import { DieType } from "../types";
import { randomNumFromAtoB } from "../utils";

interface IUseDiePackage {
    value?: number;
    dieType: DieType;
    roll: () => void; 
}

export const useDie = (type: DieType): IUseDiePackage => {
    const [value, setValue] = useState< number | undefined>(undefined);
    const [dieType, setDieType] = useState<DieType>(type);

    const roll = () =>{
        setValue(randomNumFromAtoB(1, dieType));
    }

    return {value, dieType, roll}
}