import styled, {css} from 'styled-components';
import { IDiceStyleProps } from "../types";
import { colors, diceSize } from './style';

export const D4SVGContainer = styled.img`
    height: ${diceSize}px;
    width: ${diceSize}px;
`;

export const DieValue = styled.span`
    position: absolute;
    font-size: 25px;
    color: ${colors.white};
    top: ${(diceSize - 12) / 2}px;
    left: ${(diceSize - 12) / 2}px;
`;

export const D4Container = styled.div`
    display: flex;
    position: relative;
`;