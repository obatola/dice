import { D4Container, D8DieValue } from "../Style/d4Style"
import { IPropOfDie } from "../types"
import { colors } from "../Style/style";
import { D8Icon } from "../Assets/D8Icon";


export const D8Dice = ({die}: IPropOfDie) => {
    if (!die.value || die.value <= 0) {
        return <></>
    }

    return (
        <D4Container>
            <D8DieValue die={die}>{die.value}</D8DieValue>
            <D8Icon die={die} />
        </D4Container>
    )
}