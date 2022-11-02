import { useEffect, useState } from "react";
import { useDice } from "../Hooks/useDice";
import { DieType, DieClass, IDiceCollection } from "../types";
import { AddDieSelector } from "./AddDieSelector";
import { DieViewer } from "./DieViewer";

const DiceTray = ({dice}: {dice: IDiceCollection}) => {
    
    return (
        <>
        {dice.keySeq().toJSON().map((key) => <DieViewer key={key} die={dice.get(key) as DieClass} />)}
        </>
    );
}

export const DiceRoller = () => {
    const d = useDice();

    return (
        <div>
            <DiceTray dice={d.dice} />
            <AddDieSelector dicePackage={d} />
            <button type="button" onClick={d.rollDice}>Roll</button>
        </div>
    )
}