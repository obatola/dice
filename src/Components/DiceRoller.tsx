import { useEffect, useState } from "react";
import { DieType, DieClass } from "../types";
import { Die } from "./Die";
import { DieViewer } from "./DieViewer";

export const DiceRoller = () => {
    
    return (
        <div>
            <button type="button" onClick={() => console.log("roll bounce'")}>Roll</button>
        </div>
    )
}