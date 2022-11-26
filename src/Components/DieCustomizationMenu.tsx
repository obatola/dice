import React from 'react';
import styled from 'styled-components';
import { useApp } from '../Hooks/useApplicationContext';
import { IDiceActions, useDice } from '../Hooks/useDiceContext';
import { DieWrapper } from '../Style/d6Style';
import { ColorOption } from '../Style/inputStyle';
import { arrayOfBackgroundColors, arrayOfValueColors, colors, diceSize, Header, Label } from '../Style/style';
import { DieType, IDie, InputSize } from '../types';
import { createNewDie, createNewDieWithType } from '../Utils/utils';
import { DieTypeSelector } from './AddDieSelector';
import { BasicDieViewer, DieViewer } from './DieViewer';

const DieViewerWrapper = styled.div`
    background-color: ${colors.background};
    border-radius: 100%;
    width: ${diceSize + 80}px;
    height: ${diceSize + 80}px;
    margin: auto;
    display: flex;

    ${DieWrapper} {
        margin: auto !important;
    }
`;

const ColorPanelTray = styled.div`
    display: flex;
    flex-wrap: wrap;

    ${ColorOption} {
        margin: 0 10px 10px 0;
    }
`;

const DieCustomizationPannelWrapper = styled.div`
    text-align: left;
    max-width: 300px;
    margin: auto;
    margin-top: 30px;

    div {
        margin-bottom: 40px;
    }
`

export const DieCustomizationMenu = () => {
    const {state: appState, dispatch: appDispatch} = useApp();
    const {state: diceState, dispatch: dieDispatch} = useDice();

    const dieID = appState.dieID || '';

    const die: IDie = diceState.dice.get(appState.dieID || '') || createNewDieWithType(DieType.D6);

    const dieTypes:string[]  = Object.keys(DieType).filter(x => !(parseInt(x) >= 0)) as string[];

    if (!die) {
        return <></>
    }

    const handleValueColorSelection = (event: any) => {
        dieDispatch({
            type: IDiceActions.EditDie, 
            dieID,
            die: createNewDie({
                ...die,
                valueColor: event.target.name,
            }),
        })
    }

    const handleBackgroundColorSelection = (event: any) => {
        dieDispatch({
            type: IDiceActions.EditDie, 
            dieID,
            die: createNewDie({
                ...die,
                color: event.target.name,
            }),
        })
    }

    const handleDieTypeSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dieDispatch({
            type: IDiceActions.EditDie, 
            dieID,
            die: createNewDie({
                ...die,
                type: +event.target.value,
            }),
        })
    }

    return (
        <div>
            <Header>Customize Die</Header>
            <DieViewerWrapper>
                <DieWrapper>
                    <BasicDieViewer die={{...die, isFrozen: false}} />
                </DieWrapper>
            </DieViewerWrapper>
            <DieCustomizationPannelWrapper>
                <div>
                    <Label htmlFor="dieType">Die Type</Label>
                    <DieTypeSelector name="dieType" dieType={die.type} onSelectDie={handleDieTypeSelection} />
                </div>
                <div>
                    <Label htmlFor="dieType">Die Color</Label>
                    <ColorPanelTray>    
                        {arrayOfBackgroundColors.map((color) => (
                            <ColorOption key={color} name={color} size={InputSize.small} color={color} isSelected={color === die.color} onClick={handleBackgroundColorSelection} />
                        ))}
                    </ColorPanelTray>
                </div>
                <div>
                    <Label htmlFor="dieType">Die Value Color</Label>
                    <ColorPanelTray>    
                        {arrayOfValueColors.map((color) => (
                            <ColorOption key={color} name={color} size={InputSize.small} color={color} isSelected={color === die.valueColor} onClick={handleValueColorSelection} />
                        ))}
                    </ColorPanelTray>
                </div>
            </DieCustomizationPannelWrapper>
        </div>
    )
}