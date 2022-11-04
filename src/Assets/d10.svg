import styled from 'styled-components';
import { colors, diceSize } from '../Style/style';

const DieSVG = styled.svg`
    height: ${diceSize}px;
    width: ${diceSize}px;
    fill-rule:evenodd;
    clip-rule:evenodd;
    stroke-linecap:round;
    stroke-linejoin:round;
    stroke-miterlimit:1.5;
`;

const DieOuterPath = styled.path<IDieSVGProps>`
    fill: ${(props: IDieSVGProps) => props.color};
    stroke: ${colors.stroke};
    stroke-width:5px;
`;

const DieInnerPath = styled.path<IDieSVGProps>`
    fill:none;
    stroke: ${colors.stroke};
    stroke-width:2px;
`;

interface IDieSVGProps {
    color?: string;
}

export const D8Icon = ({color = colors.red}: IDieSVGProps) => (
    <DieSVG width="100%" height="100%" viewBox="0 0 216 216" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
        <DieOuterPath color={color} id="Outer-Edge" d="M27.557,78.92c0.282,-1.696 1.11,-3.254 2.357,-4.438c10.812,-10.266 63.957,-60.722 74.609,-70.835c1.051,-0.999 2.693,-1.024 3.774,-0.058c11.059,9.877 66.715,59.584 78.983,70.541c1.535,1.371 2.476,3.287 2.622,5.341c0.937,13.208 4.509,63.51 5.654,79.637c0.217,3.057 -1.35,5.964 -4.023,7.463c-15.426,8.649 -67.098,37.618 -81.663,45.784c-2.393,1.342 -5.312,1.348 -7.711,0.016c-14.73,-8.178 -67.395,-37.418 -83.751,-46.499c-2.927,-1.625 -4.515,-4.916 -3.965,-8.218c2.792,-16.761 11.114,-66.73 13.114,-78.734Z" />
        <DieInnerPath id="Inner-Edge" d="M109.404,7.353c-0.615,-1.113 -1.782,-1.81 -3.054,-1.821c-1.272,-0.012 -2.451,0.663 -3.086,1.766c-13.966,24.257 -70.73,122.849 -85.961,149.304c-0.783,1.359 -0.783,3.031 -0.002,4.39c0.781,1.36 2.226,2.201 3.794,2.209c30.378,0.159 143.07,0.749 169.324,0.886c1.144,0.006 2.205,-0.594 2.788,-1.577c0.584,-0.983 0.603,-2.202 0.051,-3.203c-13.016,-23.587 -70.043,-126.926 -83.854,-151.954Z"/>
    </DieSVG>
)