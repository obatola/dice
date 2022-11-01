import { useEffect } from "react"
import { DieClass } from "../types"

interface IDieViewer {
    die: DieClass
    dieValue?: number
}

export const DieViewer = ({die, dieValue} : IDieViewer) => {

    useEffect(() => {
        console.log("new value");
    }, [die._value])

    return (
        <div>
            <div>Number Sides: {die.getDieName()}</div>
            <div>Value: {dieValue}</div>
            <div>. . . . . . . .</div>
        </div>
    )
}