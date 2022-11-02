import { useState } from "react";
import { Map } from 'immutable';
import { DieClass, DieType, IDiceCollection } from "../types";
import { generateId, randomNumFromAtoB } from "../utils";

export interface IUseDicePackage {
    dice: Map<string, DieClass>;
    rollDice: () => void;
    addDie: (dieType: DieType) => void;
    removeDie: (id: string) => void;
    // freezeDie: (id: string) => void;
}

export const useDice = (): IUseDicePackage => {
    const [dice, setDice] = useState<IDiceCollection>(Map({
        [generateId()]: new DieClass(DieType.D8),
        [generateId()]: new DieClass(DieType.D8),
        [generateId()]: new DieClass(DieType.D8),
        [generateId()]: new DieClass(DieType.D8),
        [generateId()]: new DieClass(DieType.D8)
    }));

    const rollDice = () => {
        setDice((previousDice) => previousDice.map(die => {
            die.roll();
            return die;
        }));
    }

    const addDie = (dieType: DieType): void => {
        const id = generateId();
        setDice((previousDice) => previousDice.set(id, new DieClass(dieType)));
    }

    const removeDie = (id: string): void => {
        setDice((previousDice) => previousDice.remove(id));
    }

    return {dice, rollDice, addDie, removeDie};
}