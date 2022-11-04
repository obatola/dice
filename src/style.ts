import styled, {css} from 'styled-components';

const dotSize = '24px';

export const DieWrapper = styled.div``;

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

interface IDiceStyleProps {
    side: number;
    isFrozen: boolean;
}

export const D6Style = styled.div<IDiceStyleProps>`
    padding: 20px;  
    background-color: ${({isFrozen}: IDiceStyleProps) => isFrozen ? 'gray' : 'tomato'};  
    width: 76px;  
    height: 76px;  
    border-radius: 10%;
    display: flex;

    ${/* @ts-ignore */ ''}
    ${({side}: IDiceStyleProps) => d6Sides[side] || ''}
`