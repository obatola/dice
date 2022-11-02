import { useEffect } from "react"
import { DieClass } from "../types"

interface IDieViewer {
    die: DieClass
}

export const DieViewer = ({die} : IDieViewer) => {

    return (
        <div>
            <div>Number Sides: {die.getDieName()}</div>
            <div>Value: {die.getDieValue()}</div>
            <div>. . . . . . . .</div>
        </div>
    )
}