import styled, {css} from 'styled-components';
import { IDiceStyleProps } from "../types";
import { colors, diceSize } from './style';

export const D4SVGContainer = styled.img`
    height: ${diceSize}px;
    width: ${diceSize}px;
`;

const diceValueStyle = css`
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    width: 60px;
    color: ${colors.white};
`

export const D4DieValue = styled.span`
    ${diceValueStyle}
    top: ${((diceSize) / 2) - 6}px;
    left: ${((diceSize) / 2) - 31}px;
`;

export const D8DieValue = styled.span`
    ${diceValueStyle}
    top: ${((diceSize) / 2) - 20}px;
    left: ${((diceSize) / 2) - 31}px;
`;

export const D10DieValue = styled.span`
    ${diceValueStyle}
    top: ${((diceSize) / 2) - 18}px;
    left: ${((diceSize) / 2) - 31}px;
`;

export const D12DieValue = styled.span`
    ${diceValueStyle}
    top: ${((diceSize) / 2) - 18}px;
    left: ${((diceSize) / 2) - 30}px;
`;

export const D20DieValue = styled.span`
    ${diceValueStyle}
    top: ${((diceSize) / 2) - 18}px;
    left: ${((diceSize) / 2) - 30}px;
`;

export const D4Container = styled.div`
    display: flex;
    position: relative;
`;