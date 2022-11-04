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
    stroke: '#3d3d3d', // #3d3d3d
    background: '#f7f1e3',
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
`

export const DiceTrayStyle = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    place-items: center;

    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));


    // @media (min-width: 600px) {
    //     .cards { grid-template-columns: repeat(2, 1fr); }
    // }

    // @media (min-width: 900px) {
    //     .cards { grid-template-columns: repeat(3, 1fr); }
    // }
`