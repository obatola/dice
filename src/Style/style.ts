import styled from 'styled-components';
import { InputType } from '../types';
export const dotSize = '24px';
export const diceSize = 116;

export const colors = {
    blue: 'rgb(52, 152, 219)',
    green: 'rgb(38, 173, 96)',
    purple: '#ccae62',
    orange: '#e67e22',
    red: '#e74c3c',
    dangerRed: '#ffa9a9',
    freezeBlue: '#d4eaed',
    white: '#FEFFF8',
    grey: '#93989B',
    pink: ' #f78fb3',
    stroke: '#4B382C', // #594639 #3d3d3d
    interiorRoundingFill: '#4b4b4b',
    background: '#f5f7e3', // #f7f1e3 #ECE2D1
    font: '#4B382C',
}

export const inputColors = {
    button: {
        background: {
            [InputType.normal]: colors.white,
            [InputType.danger]: colors.dangerRed,
            [InputType.freeze]: colors.freezeBlue,
        },
        border: colors.font,
    }
}

export const dieColor = {
    frozenBackground: colors.grey,
    frozenBorder: colors.grey,
    border: colors.font
}

export const arrayOfBackgroundColors = [
    colors.red,
    colors.blue,
    colors.purple,
    colors.orange,
    colors.pink,
    colors.dangerRed,
    colors.green
];

export const DieOptionPanel = styled.span`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;

    button {
        margin-right: 5px
    }
`;

export const DiceTrayStyle = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 0;
    place-items: center;

    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
`;

export const DieSVG = styled.svg`
    height: ${diceSize}px;
    width: ${diceSize}px;

    fill-rule:evenodd;
    clip-rule:evenodd;
    stroke-linecap:round;
    stroke-linejoin:round;
    stroke-miterlimit:1.5;
`;

export const Header = styled.h1`
    margin-bottom: 10px;
`;

export const Spacer = styled.div`
    margin-bottom: 30px;
`