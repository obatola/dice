import React, { createContext, useReducer } from "react";
import { Map } from 'immutable';
import { DieType, IDiceCollection } from "../types";
import { createNewDie, generateId, generateRolledValue, randomNumFromAtoB } from "../utils";

interface IDiceState {
    dice: IDiceCollection;
    isRolling: boolean;
}

export enum IDiceActions {
    RollAll = 'RollAll',
    AddDie = 'AddDie',
    RemoveDie = 'RemoveDie'
}

type IDiceActionPackages = 
    {type: IDiceActions.RollAll} | 
    {type: IDiceActions.AddDie, dieType: DieType} | 
    {type: IDiceActions.RemoveDie, id: string}

export interface IUseDicePackage {
  state: IDiceState, 
  dispatch: React.Dispatch<IDiceActionPackages>
}

const initialState: IDiceState = {
    dice: Map({
            [generateId()]: createNewDie(DieType.D8),
            [generateId()]: createNewDie(DieType.D8),
            [generateId()]: createNewDie(DieType.D8),
            [generateId()]: createNewDie(DieType.D8),
            [generateId()]: createNewDie(DieType.D8)
        }),
    isRolling: false,
}

function diceHandlerReducer(state: IDiceState, action: IDiceActionPackages) {
    switch (action.type) {
      case IDiceActions.AddDie: {
        const id = generateId();
        return { ...state, dice: state.dice.set(id, createNewDie(action.dieType))}
      }
      case IDiceActions.RemoveDie: {
        return { ...state, dice: state.dice.remove(action.id)}
      }
      case IDiceActions.RollAll: {
        return { 
            ...state, 
            dice: state.dice.map(die => (
                {
                    ...die,
                    value: generateRolledValue(die.type),
                }
            ))
        }
      }
      default: {
        // @ts-ignore
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
  }

const DiceContext = createContext<IUseDicePackage | null>(null);
DiceContext.displayName = 'DiceContext'

export const DiceContextProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(diceHandlerReducer, initialState)

    return (<DiceContext.Provider value={{state, dispatch}}>
        {children}
    </DiceContext.Provider>)
}

export const useDice = (): IUseDicePackage => {
    const context = React.useContext(DiceContext);
    
    if (!context) {
      throw new Error(
        'useDice must be used within a DiceContextProvider',
      )
    }

    return context;
}