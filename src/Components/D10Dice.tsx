import { D10DieValue, D4Container } from "../Style/d4Style"
import { IPropOfDie } from "../types"
import { colors } from "../Style/style";
import { D8Icon } from "../Assets/D8Icon";
import { D10Icon } from "../Assets/D10Icon";


export const D10Dice = ({die}: IPropOfDie) => {
    if (!die.value || die.value <= 0) {
        return <></>
    }

    return (
        <D4Container>
            <D10DieValue die={die}>{die.value}</D10DieValue>
            <D10Icon die={die} />
        </D4Container>
    )
}