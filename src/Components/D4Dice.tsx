import { D4Container, DieValue } from "../Style/d4Style"
import { IPropOfDie } from "../types"
import { D4Icon } from "../Assets/d4Icon";
import { colors } from "../Style/style";


export const D4Dice = ({die}: IPropOfDie) => {
    if (!die.value || die.value <= 0) {
        return <></>
    }

    return (
        <D4Container>
            <DieValue>{die.value}</DieValue>
            <D4Icon color={die.isFrozen ? colors.grey : colors.red}/>
        </D4Container>
    )
}