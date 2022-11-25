import { IDie, IPropOfDie } from "../types"
import { D6Dot, D6Style } from "../Style/d6Style"



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

export const D6Dice = ({die}: IPropOfDie) => {
    if (!die.value || die.value <= 0) {
        return <></>
    }

    return (
        <D6Style die={die}>
            {getD6Dots(die.value)}
        </D6Style>
    )
}