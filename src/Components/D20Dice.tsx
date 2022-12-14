import { D20DieValue, D4Container } from "../Style/d4Style"
import { IPropOfDie } from "../types"
import { D20Icon } from "../Assets/D20Icon";


export const D20Dice = ({die}: IPropOfDie) => {
    if (!die.value || die.value <= 0) {
        return <></>
    }

    return (
        <D4Container>
            <D20DieValue die={die}>{die.value}</D20DieValue>
            <D20Icon die={die} />
        </D4Container>
    )
}