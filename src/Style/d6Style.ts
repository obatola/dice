import styled, {css} from 'styled-components';
import { IDiceStyleProps } from '../types';
import { colors, diceSize } from './style';

const dotSize = '20px';

export const DieWrapper = styled.div`
    padding: 25px;
    position: relative;
    margin-bottom: 40px;

    @media (max-width: 800px) {
        margin-bottom: 0;
    }
`;

export const D6Dot = styled.span`
    display: block;
    width: ${dotSize};
    height: ${dotSize};
    border-radius: 50%;
    background-color:white;
`

const dieStyled4d6 = css`
    display: flex;
    justify-content: space-between;

    .d6-column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }`;

const d6Sides = {
    1: css`
        display: flex;
        justify-content: center;
        align-items: center;`,
    2: css`
        justify-content : space-between;
        
        ${D6Dot}:nth-of-type(2) {
            align-self: flex-end;
        }`,
    3: css`
        justify-content : space-between;

        ${D6Dot}:nth-of-type(2) {
            align-self: center;
        }
        
        ${D6Dot}:nth-of-type(3) {
            align-self: flex-end;
        }`,
    4: dieStyled4d6,
    5: css`
        ${dieStyled4d6}
    
        .d6-column:nth-of-type(2) {
            justify-content: center;
        }`,
    6: dieStyled4d6,
}


const padding = 18;
const widthHeight = (diceSize - 12) - (2 * padding);

export const D6Style = styled.div<IDiceStyleProps>`
    padding: ${padding}px;  
    background-color: ${({isFrozen, color}: IDiceStyleProps) => isFrozen ? colors.grey : color};  
    width: ${widthHeight}px;  
    height: ${widthHeight}px;  
    border-radius: 10%;
    display: flex;
    border: solid 3px ${colors.stroke};

    ${/* @ts-ignore */ ''}
    ${({side}: IDiceStyleProps) => d6Sides[side] || ''}
`;