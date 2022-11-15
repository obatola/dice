import React from "react";
import { IDiceActions, useDice } from "../Hooks/useDiceContext";
import { RollButton } from "../Style/inputStyle";
import { DiceTrayStyle, Spacer } from "../Style/style";
import { IDiceCollection } from "../types";
import { AddDieSelector } from "./AddDieSelector";
import { DieViewer } from "./DieViewer";
import { RollButtonTray } from "./RollButtonTray";

const DiceTray = ({dice}: {dice: IDiceCollection}) => (
    <DiceTrayStyle>
        {dice.keySeq().toJSON().map((key) => <DieViewer key={key} dieID={key} />)}
    </DiceTrayStyle>
)

export const DiceRoller = () => {
    const {state} = useDice();

    return (
        <div>
            <AddDieSelector />
            <Spacer />
            <RollButtonTray />
            <DiceTray dice={state.dice} />
        </div>
    )
}