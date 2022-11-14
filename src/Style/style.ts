import styled from 'styled-components';

export const dotSize = '24px';
export const diceSize = 116;

export const colors = {
    blue: 'rgb(52, 152, 219)',
    green: 'rgb(38, 173, 96)',
    purple: '#ccae62',
    orange: '#e67e22',
    red: '#e74c3c',
    white: 'rgb(236, 240, 241)',
    grey: 'rgb(189, 195, 199)',
    pink: ' #f78fb3',
    hotPink: ' #ea8685',
    stroke: '#594639', // #3d3d3d
    interiorRoundingFill: '#4b4b4b',
    background: '#f5f7e3', // #f7f1e3 #ECE2D1
    font: '#594639',
}

export const inputColors = {
    button: {
        background: '#fefff4',
        border: colors.font,
    }
}

export const arrayOfBackgroundColors = [
    colors.red,
    colors.blue,
    colors.purple,
    colors.orange,
    colors.pink,
    colors.hotPink,
    colors.green
];

export const DieOptionPanel = styled.span`
    position: absolute;
    top: 0;
    left 0;

    button {
        margin-right: 5px
    }
`;

export const DiceTrayStyle = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 1rem;
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

`;

export const Spacer = styled.div`
    margin-bottom: 30px;
`