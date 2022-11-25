import styled, { css } from 'styled-components';
import { InputSize, InputType } from '../types';
import { borderRadius, inputColors } from './style';
interface IInputProps {
  size?: InputSize;
  inputType?: InputType;
  fluid?: boolean;
  color?: string;
}

const inputParams = {
  base: {
    [InputSize.normal]: css`
      font-size: 16px;
      border: 3px solid;
      box-shadow: 0.5px 0.5px 0px 0px, 1px 1px 0px 0px, 1.5px 1.5px 0px 0px, 2px 2px 0px 0px, 2.5px 2.5px 0px 0px, 3px 3px 0px 0px, 3.5px 3.5px 0px 0px, 4px 4px 0px 0px, 4.5px 4.5px 0px 0px, 5px 5px 0px 0px;
    `,
    [InputSize.small]: css`
      font-size: 10px;
      border: 1.5px solid;
      box-shadow: 0.5px 0.5px 0px 0px, 1px 1px 0px 0px, 1.5px 1.5px 0px 0px, 2px 2px 0px 0px;
    `,
  },
  active: {
    [InputSize.normal]: css`
      top: 5px;
      left: 5px;
    `,
    [InputSize.small]: css`
      top: 2px;
      left: 2px;
    `,
  },
  focus: {
    [InputSize.normal]: css`
      box-shadow: 0.5px 0.5px 0px 0px, 1px 1px 0px 0px, 1.5px 1.5px 0px 0px, 2px 2px 0px 0px, 2.5px 2.5px 0px 0px, 3px 3px 0px 0px, 3.5px 3.5px 0px 0px;
      top: 1.5px;
      left: 1.5px;
    `,
    [InputSize.small]: css`
      box-shadow: 0.5px 0.5px 0px 0px, 1px 1px 0px 0px;
      top: 1px;
      left: 1px;
    `,
  }
}

const inputStyling = css<IInputProps>`
  z-index: 1;
  ${({fluid}: IInputProps) => fluid && `width: 100%;`}
  -webkit-appearance: none;
  ${({size = InputSize.normal}: IInputProps) => inputParams.base[size]};
  font-family: "Open Sans", sans-serif;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: ${inputColors.button.border};
  background-color: ${({inputType = InputType.normal, color}: IInputProps) => color || inputColors.button.background[inputType]};
  cursor: pointer;
  border-radius: ${borderRadius};
  padding: 0.25em 0.5em;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :active {
    box-shadow: 0px 0px 0px 0px;
    ${({size = InputSize.normal}: IInputProps) => inputParams.active[size]};
  }
    
  :focus {
    ${({size = InputSize.normal}: IInputProps) => inputParams.focus[size]};
    outline: none;
  }
  
  @media (min-width: 768px) {
    padding: 0.25em 0.75em;
  }
`;

export const Select = styled.select`
  ${inputStyling}

  :after {
    z-index: 3;
    content: '';
    display: inline-block;
    float: right;
    width: 5rem;
    height: 5rem;
    color: yellow;
    border-bottom: 10px solid yellow;
    border-left: 10px solid yellow;
    border-bottom-left-radius: 2px;
  }
`;

export const Button = styled.button<IInputProps>`
  ${inputStyling}

  :active:focus {
    box-shadow: 0px 0px 0px 0px;
    ${({size = InputSize.normal}: IInputProps) => inputParams.active[size]};
  }
`

export const RollButton = styled(Button)`
  width: 100%;
  height: 80px;
  max-width: 600px;
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

interface IColorOptionsProps extends IInputProps {
  isSelected?: boolean;
}

export const ColorOption = styled(Button)<IColorOptionsProps>`
    width: 30px;
    height: 30px;

    ${({isSelected, size}: IColorOptionsProps) => isSelected && `
        box-shadow: 0px 0px 0px 0px !important;
        top: 2px !important;
        left: 2px !important;
    `}
`;

export const DieSelectorTray = styled.div`
    ${Select} {
      margin-right: 20px;
    }
`;