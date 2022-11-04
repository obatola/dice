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

const DieInnerRounding = styled.path<IDieSVGProps>`
    fill: ${colors.stroke};
    stroke: none;
`;

interface IDieSVGProps {
    color?: string;
}

export const D10Icon = ({color = colors.red}: IDieSVGProps) => (
    <DieSVG width="100%" height="100%" viewBox="0 0 216 216" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
        <DieOuterPath color={color} d="M9.989,81.076c0.275,-2.802 1.805,-5.328 4.161,-6.87c16.273,-10.643 80.912,-52.922 94.966,-62.114c1.62,-1.06 3.733,-0.977 5.266,0.205c14.158,10.923 82.617,63.735 93.167,71.874c0.861,0.664 1.367,1.691 1.369,2.779c0.013,7.284 0.065,35.607 0.083,45.657c0.004,2.204 -1.165,4.245 -3.069,5.357c-15.664,9.152 -86.318,50.428 -98.358,57.462c-1.069,0.624 -2.4,0.583 -3.428,-0.107c-11.65,-7.822 -80.397,-53.977 -95.791,-64.312c-1.882,-1.264 -2.919,-3.46 -2.698,-5.717c0.917,-9.351 3.339,-34.076 4.332,-44.214Z"/>
        <DieInnerPath d="M43.824,135.341c-0.275,0.506 -0.336,1.101 -0.17,1.652c0.165,0.552 0.544,1.015 1.053,1.286c9.739,5.186 53.442,28.461 60.462,32.199c0.6,0.32 1.315,0.338 1.931,0.05c7.109,-3.327 50.847,-23.8 60.571,-28.351c1.064,-0.498 1.535,-1.755 1.06,-2.83c-6.263,-14.176 -45.125,-102.129 -54.805,-124.036c-0.409,-0.926 -1.309,-1.538 -2.319,-1.579c-1.011,-0.042 -1.958,0.495 -2.441,1.384c-11.49,21.141 -57.801,106.35 -65.342,120.225Z"/>
        <DieInnerPath d="M5.298,128.955l37.486,8.3"/>
        <DieInnerPath d="M105.827,196.447l0.295,-25.461"/>
        <DieInnerRounding d="M98.775,168.191c-0,-0 4.493,2.12 5.545,3.618c1.053,1.497 0.768,5.368 0.768,5.368l1.995,0.067c0,0 -0.472,-3.862 0.669,-5.285c1.199,-1.496 6.528,-3.69 6.528,-3.69l-8.235,2.051l-7.27,-2.129Z"/>
        <DieInnerPath d="M169.585,141.281l39.422,-5.113"/>
        <DieInnerRounding d="M31.264,133.704c0,0 7.698,2.426 10.509,1.125c2.812,-1.301 6.353,-9.34 6.353,-9.34l1.738,0.775c0,0 -4.544,7.633 -3.865,10.272c0.68,2.638 7.941,5.56 7.941,5.56l-1.071,1.658c0,0 -6.324,-3.531 -9.563,-4.724c-3.674,-1.352 -12.475,-3.39 -12.475,-3.39l0.433,-1.936Z"/>
        <DieInnerRounding d="M181.286,138.829c0,0 -7.716,1.994 -10.405,0.455c-2.688,-1.539 -5.686,-10.092 -5.686,-10.092l-1.798,0.622c-0,0 3.869,7.996 2.965,10.567c-0.904,2.57 -8.301,5.035 -8.301,5.035l1.248,1.772c0,0 6.192,-3.181 9.522,-4.09c3.776,-1.031 12.72,-2.302 12.72,-2.302l-0.265,-1.967Z"/>
    </DieSVG>
)