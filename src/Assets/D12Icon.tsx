import styled from 'styled-components';
import { BackgroundColorShapes, colors, diceSize, DieInnerPath, DieOuterPath, DieSVG } from '../Style/style';
import { IDieSVGProps } from '../types';

const DieCornerFill = styled.path`
    fill: ${colors.stroke};
    stroke: none;
`;

const DieInteriorCornerCenterFill = styled.path`
    fill: ${colors.interiorRoundingFill};
    stroke: none;
`;

export const D12Icon = ({die}: IDieSVGProps) => (
    <DieSVG width="100%" height="100%" viewBox="0 0 900 900" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
        <g id="Background-Color">
            <BackgroundColorShapes die={die} shadeValue={10} id="m" d="M705.417,389.889l-94.776,282.825l-341.707,-6.106l-84.02,-289.536l262.822,-184.304l257.681,197.121Z" />
            <BackgroundColorShapes die={die} shadeValue={-20} id="b" d="M191.933,795.914l243.727,88.672l245.054,-91.727l-66.924,-117.949l-344.357,-6.876l-77.5,127.88Z" />
            <BackgroundColorShapes die={die} shadeValue={0} id="tl" d="M452.28,16.166l-6.204,181.058l-264.637,176.964l-137.218,-73.918l151.072,-198.55l256.987,-85.554Z" />
            <BackgroundColorShapes die={die} shadeValue={20} id="tr" d="M451.214,17.432l-1.681,176.444l260.645,195.047l129.269,-56.234l-130.832,-220.513l-257.401,-94.744Z" />
            <BackgroundColorShapes die={die} shadeValue={-20} id="bl" d="M181.844,374.593l-133.513,-73.641l-2.559,267.352l144.318,228.242l77.456,-128.437l-85.702,-293.516Z" />
            <BackgroundColorShapes die={die} shadeValue={0} id="br" d="M852.15,334.022l-145.967,53.195l-93.922,285.376l74.345,118.675l156.515,-198.046l9.029,-259.2Z" />
        </g>
        <g id="Edges">
            <DieOuterPath id="Outside" d="M444.658,16.652c4.487,-1.497 9.351,-1.416 13.786,0.229c36.322,13.474 206.011,76.42 241.199,89.473c4.157,1.541 7.71,4.373 10.14,8.081c20.518,31.306 119.2,181.873 139.302,212.544c2.33,3.555 3.512,7.739 3.387,11.987c-1.06,35.956 -6.176,209.568 -7.237,245.55c-0.125,4.254 -1.556,8.367 -4.098,11.782c-21.674,29.11 -126.98,170.549 -148.632,199.631c-2.537,3.407 -6.058,5.953 -10.088,7.296c-34.795,11.588 -205.721,68.517 -241.725,80.508c-4.323,1.44 -9,1.417 -13.309,-0.065c-34.956,-12.025 -197.33,-67.879 -232.829,-80.09c-4.447,-1.53 -8.243,-4.524 -10.765,-8.493c-20.933,-32.939 -119.834,-188.56 -139.343,-219.257c-2.183,-3.435 -3.307,-7.435 -3.234,-11.504c0.653,-36.341 3.963,-220.441 4.649,-258.559c0.08,-4.488 1.614,-8.829 4.37,-12.372c22.463,-28.867 127.21,-163.481 148.69,-191.086c2.514,-3.231 5.927,-5.646 9.81,-6.941c33.656,-11.229 199.818,-66.667 235.927,-78.714Z" />
            <DieInnerPath id="Inside" d="M188.894,405.997c-5.087,-17.427 1.628,-36.148 16.633,-46.368c50.885,-34.658 165.43,-112.677 215.734,-146.94c14.67,-9.992 34.044,-9.656 48.359,0.838c49.843,36.542 164.513,120.61 215.303,157.845c14.851,10.888 20.852,30.197 14.789,47.586c-19.035,54.589 -59.73,171.293 -78.536,225.225c-5.919,16.975 -22.009,28.282 -39.986,28.1c-65.088,-0.658 -218.432,-2.21 -284.417,-2.877c-18.46,-0.187 -34.623,-12.435 -39.796,-30.156c-16.427,-56.281 -51.795,-177.448 -68.083,-233.253Z" />
            <DieInnerPath d="M446.468,173.317l5.124,-158.978" />
            <DieInnerPath d="M732.362,380.692l120.302,-48.252" />
            <DieInnerPath d="M622.975,692.046l65.633,109.117" />
            <DieInnerPath d="M259.199,680.082l-71.514,121.133" />
            <DieInnerPath d="M165.482,368.141l-119.497,-69.29" />
        </g>
        <g id="Exterior-Corners" >
            <DieCornerFill d="M418.826,35.944c0.674,-0.499 30.818,-15.119 27.861,11.866l8.073,0.541c-0.17,-0.953 -4.064,-26.597 25.07,-12.485l2.041,-7.393l-29.591,-12.307l-35.093,12.151l1.639,7.627Z"/>
            <DieCornerFill d="M823.408,306.45c0.671,0.502 19.647,31.321 -7.049,36.243l5.476,5.734c0.864,-0.437 24.564,-9.994 19.418,21.966l7.412,-1.71l3.286,-31.88l-21.722,-30.122l-6.821,-0.231Z"/>
            <DieCornerFill d="M54.769,343.632c-0.145,-0.826 -5.056,-39.532 17.776,-24.847l4.086,-6.984c-1.851,1.498 -28.025,-12.206 1.027,-36.646l-6.723,3.514l-24.216,20.993l-4.78,36.828l12.83,7.142Z"/>
            <DieCornerFill d="M172.168,758.418c0.288,0.787 14.82,31.576 29.27,12.422l7.729,2.128c-2.353,-0.368 -12.694,26.884 24.696,33.465l-13.705,-0.077l-31.478,-6.022l-22.601,-29.468l6.089,-12.448Z"/>
            <DieCornerFill d="M709.155,756.298c-0.287,0.787 -19.225,35.711 -33.675,16.558l-7.563,1.247c2.353,-0.368 12.518,24.795 -24.872,31.376l13.715,2.893l31.478,-6.022l22.601,-29.468l-1.684,-16.584Z"/>
            <DieCornerFill d="M141.372,349.417c0,-0 35.337,26.91 83.974,-8.236c6.495,-4.693 4.275,7.02 4.275,7.02l-36.794,20.38l-6.795,26.464l12.098,31.646l-11.991,-14.041c0,-0 -5.356,-34.965 -49.431,-56.878c-3.947,-1.963 4.664,-6.355 4.664,-6.355Z"/>
            <DieCornerFill d="M631.354,714.674c-0,-0 -14.795,-41.881 -74.74,-39.16c-8.005,0.364 0.275,-6.989 0.275,-6.989l41.944,1.907l20.194,-18.404l7.236,-33.098l2.623,14.357c-0,-0 -14.989,36.136 9.852,78.629c2.225,3.806 -7.384,2.758 -7.384,2.758Z"/>
            <DieCornerFill d="M755.034,376.536c-0,0 -42.932,5.683 -57.416,60.832c-2.036,7.75 -7.597,3.059 -7.597,3.059l12.01,-40.234l-12.965,-24.05l-24.911,-16.814l9.116,2.709c-0,0 28.863,22.9 76.108,9.091c4.231,-1.237 5.655,5.407 5.655,5.407Z"/>
            <DieCornerFill d="M240.377,706.331c-0,0 25.076,-33.072 7.82,-84.762c-2.537,-7.601 5.52,-2.481 5.52,-2.481l14.04,39.649l24.983,11.062l27.959,-3.16l-10.578,5.954c0,0 -35.574,-3.181 -64.448,36.681c-2.587,3.57 -5.296,-2.943 -5.296,-2.943Z"/>
            <DieCornerFill d="M451.33,149.551c0,0 -5.964,42.656 39.399,76.137c6.447,4.759 -4.334,5.49 -4.334,5.49l-32.797,-26.216l-27.157,3.003l-25.321,22.508l6.324,-13.152c0,-0 33.781,-16.968 36.479,-68.103c0.232,-4.403 7.407,0.333 7.407,0.333Z"/>
        </g>
        <g id="Interior-Corners" >
            <DieInteriorCornerCenterFill d="M164.962,366.127c9.39,6.405 15.107,14.664 19.731,24.308c-1.393,-11.197 5.477,-20.588 10.752,-26.224c-9.689,3.136 -20.951,3.885 -30.483,1.916Z" />
            <DieInteriorCornerCenterFill d="M620.789,687.764c-4.34,-10.505 -4.591,-20.546 -3.17,-31.147c-4.976,10.127 -15.87,14.213 -23.371,16.034c9.821,2.691 19.65,8.24 26.541,15.113Z" />
            <DieInteriorCornerCenterFill d="M725.165,382.09c-11.244,1.665 -21.047,-0.523 -30.988,-4.469c8.621,7.28 9.947,18.839 9.896,26.559c4.99,-8.878 12.754,-17.07 21.092,-22.09Z" />
            <DieInteriorCornerCenterFill d="M256.745,686.816c7.865,-8.206 16.953,-12.484 27.227,-15.456c-11.274,-0.471 -19.404,-8.794 -24.094,-14.925c1.496,10.073 0.38,21.305 -3.133,30.381Z" />
            <DieInteriorCornerCenterFill d="M445.822,175.733c-1.933,11.201 -7.077,19.828 -13.933,28.037c9.61,-5.912 21.005,-3.558 28.321,-1.096c-6.872,-7.515 -12.226,-17.452 -14.388,-26.941Z" />
        </g>
    </DieSVG>
)