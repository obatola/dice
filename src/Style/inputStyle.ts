import styled, { css } from 'styled-components';
import { colors, inputColors } from './style';

const transitionParam = css`0.05s ease`

const inputStyling = css`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: ${inputColors.button.border};
  background-color: ${inputColors.button.background};
  cursor: pointer;
  border: 3px solid;
  border-radius: 5px;
  padding: 0.25em 0.5em;
  box-shadow: 0.5px 0.5px 0px 0px, 1px 1px 0px 0px, 1.5px 1.5px 0px 0px, 2px 2px 0px 0px, 2.5px 2.5px 0px 0px, 3px 3px 0px 0px, 3.5px 3.5px 0px 0px, 4px 4px 0px 0px, 4.5px 4.5px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  transition: box-shadow ${transitionParam}, background-color ${transitionParam}, top ${transitionParam}, left ${transitionParam};
  
  
  :active {
    box-shadow: 0px 0px 0px 0px;
    background-color: ${colors.background};
    top: 5px;
    left: 5px;
  }
    
  :focus {
    box-shadow: 0.5px 0.5px 0px 0px, 1px 1px 0px 0px, 1.5px 1.5px 0px 0px, 2px 2px 0px 0px, 2.5px 2.5px 0px 0px, 3px 3px 0px 0px, 3.5px 3.5px 0px 0px;
    top: 1.5px;
    left: 1.5px;
    outline: none;
  }
  
  @media (min-width: 768px) {
    padding: 0.25em 0.75em;
  }
`

export const Select = styled.select`
  ${inputStyling}
`;

export const Button = styled.button`
  ${inputStyling}

  :active:focus {
    box-shadow: 0px 0px 0px 0px;
    background-color: ${colors.background};
    top: 5px;
    left: 5px;
  }
`

export const RollButton = styled(Button)`
  width: 200px;
  height: 60px;
`;

export const ButtonSimple = styled.button`
    margin: 50px;
    font-family: inherit;

    font-size: 20px;
    font-weight: 200;
    letter-spacing: 1px;
    padding: 13px 50px 13px;
    outline: 0;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    
    ::after {
      content: "";
      background-color: #ffe54c;
      width: 100%;
      z-index: -1;
      position: absolute;
      height: 100%;
      top: 7px;
      left: 7px;
      transition: 0.2s;
    }
    
    :hover::after {
      top: 0px;
      left: 0px;
    }
`;

export const DieSelectorTray = styled.div`
    ${Select} {
      margin-right: 20px;
    }
`;

