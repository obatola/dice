import { D4Container, D4DieValue } from "../Style/d4Style"
import { IPropOfDie } from "../types"
import { D4Icon } from "../Assets/D4Icon";
import { colors } from "../Style/style";


export const D4Dice = ({die}: IPropOfDie) => {
    if (!die.value || die.value <= 0) {
        return <></>
    }

    return (
        <D4Container>
            <D4DieValue>{die.value}</D4DieValue>
            <D4Icon color={die.isFrozen ? colors.grey : die.color}/>
        </D4Container>
    )
}