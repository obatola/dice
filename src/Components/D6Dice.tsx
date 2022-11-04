import { IDie } from "../types"
import { D6Dot, D6Style } from "../style"



const getD6Dots = (side: number) => {
    if (side === 1 || side === 2 || side === 3 ) {
        // @ts-ignore
        return (Array.apply(null, {length: side}).map((i) => <D6Dot />))
    } else if (side === 4) {
        return (
            <>
                <div className="d6-column">
                    <D6Dot />
                    <D6Dot />
                </div>
                <div className="d6-column">
                    <D6Dot />
                    <D6Dot />
                </div>
            </>
        )
    }  else if (side === 5) {
        return (
            <>
                <div className="d6-column">
                    <D6Dot />
                    <D6Dot />
                </div>
                <div className="d6-column">
                    <D6Dot />
                </div>
                <div className="d6-column">
                    <D6Dot />
                    <D6Dot />
                </div>
            </>
        )
    } else if (side === 6) {
        return (
            <>
                <div className="d6-column">
                    <D6Dot />
                    <D6Dot />
                    <D6Dot />
                </div>
                <div className="d6-column">
                    <D6Dot />
                    <D6Dot />
                    <D6Dot />
                </div>
            </>
        )
    }
    return <></>
} 

interface IProps {
    die: IDie
}
export const D6Dice = ({die}: IProps) => {
    if (!die.value || die.value <= 0) {
        return <></>
    }

    return (
        <D6Style side={die.value as number} isFrozen={die.isFrozen}>
            {getD6Dots(die.value)}
        </D6Style>
    )
}