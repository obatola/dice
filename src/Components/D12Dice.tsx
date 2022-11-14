import { D12DieValue, D4Container } from "../Style/d4Style"
import { IPropOfDie } from "../types"
import { colors } from "../Style/style";
import { D8Icon } from "../Assets/D8Icon";
import { D12Icon } from "../Assets/D12Icon";


export const D12Dice = ({die}: IPropOfDie) => {
    if (!die.value || die.value <= 0) {
        return <></>
    }

    return (
        <D4Container>
            <D12DieValue>{die.value}</D12DieValue>
            <D12Icon color={die.isFrozen ? colors.grey : die.color}/>
        </D4Container>
    )
}