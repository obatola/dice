import React from 'react';
import styled from 'styled-components';
import { useApp } from '../Hooks/useApplicationContext';
import { IDiceActions, useDice } from '../Hooks/useDiceContext';
import { Button, ColorOption } from '../Style/inputStyle';
import { arrayOfBackgroundColors, colors, Header, Label } from '../Style/style';
import { DieType, IDie, InputSize } from '../types';
import { createNewDie, createNewDieWithType } from '../utils';
import { DieTypeSelector } from './AddDieSelector';
import { DieViewer } from './DieViewer';

const DieViewerWrapper = styled.div`
    background-color: ${colors.background};
    border-radius: 100%;
    width: 166px;
    margin: auto;
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

    const handleColorSelection = (event: any) => {
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
                <DieViewer dieID={dieID} hideOptions />
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
                            <ColorOption name={color} size={InputSize.small} color={color} isSelected={color === die.color} onClick={handleColorSelection} />
                        ))}
                    </ColorPanelTray>
                </div>
            </DieCustomizationPannelWrapper>
        </div>
    )
}