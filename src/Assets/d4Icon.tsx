import styled from 'styled-components';
import { colors DieSVG } from '../Style/style';

const DieSVGPath = styled.path<IDieSVGProps>`
    fill: ${({color = colors.red}: IDieSVGProps) => color};
    stroke: ${colors.stroke};
    stroke-width: 5px;
`

interface IDieSVGProps {
    color?: string;
}

export const D4Icon = ({color = colors.red}: IDieSVGProps) => (
    <DieSVG width="100%" height="100%" viewBox="0 0 220 220" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
       <DieSVGPath color={color} d="M99.354,17.533c1.644,-3.288 5.005,-5.366 8.682,-5.366c3.677,0 7.038,2.078 8.682,5.366c20.822,41.643 73.274,146.548 92.291,184.582c1.505,3.009 1.344,6.583 -0.425,9.444c-1.768,2.862 -4.893,4.604 -8.257,4.604l-184.582,0c-3.364,0 -6.488,-1.742 -8.257,-4.604c-1.769,-2.861 -1.93,-6.435 -0.425,-9.444c19.017,-38.034 71.469,-142.939 92.291,-184.582Z" />
    </DieSVG>
)