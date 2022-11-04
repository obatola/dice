import React, { createContext, useReducer } from "react";
import { Map } from 'immutable';
import { DieType, IDiceCollection, IDie } from "../types";
import { createNewDie, generateId, generateRolledValue } from "../utils";

interface IDiceState {
    dice: IDiceCollection;
    isRolling: boolean;
}

export enum IDiceActions {
    AddDie = 'AddDie',
    ToggleFreeze = 'ToggleFreeze',
    RemoveDie = 'RemoveDie',
    RollAll = 'RollAll',
}

type IDiceActionPackages = 
    {type: IDiceActions.AddDie, dieType: DieType} | 
    {type: IDiceActions.ToggleFreeze, id: string} | 
    {type: IDiceActions.RemoveDie, id: string} |
    {type: IDiceActions.RollAll}

export interface IUseDicePackage {
  state: IDiceState, 
  dispatch: React.Dispatch<IDiceActionPackages>
}

const initialState: IDiceState = {    
    dice: Map({
            [generateId()]: createNewDie(DieType.D4),
            [generateId()]: createNewDie(DieType.D6),
            [generateId()]: createNewDie(DieType.D8),
            [generateId()]: createNewDie(DieType.D10)
        }),
    isRolling: false,
}

function diceHandlerReducer(state: IDiceState, action: IDiceActionPackages) {
  console.log({action})
    switch (action.type) {
      case IDiceActions.AddDie: {
        const id = generateId();
        const newDie = createNewDie(action.dieType);
        console.log('nd', newDie)
        const newDice = state.dice.set(id, newDie);
        console.log('ndc', newDice.toJSON())
        return { ...state, dice: state.dice.set(id, createNewDie(action.dieType))}
      }
      case IDiceActions.ToggleFreeze: {
        return { ...state, dice: state.dice.update(action.id, (die) => {
          return {
            ...die,
            isFrozen: !die?.isFrozen,
          } as IDie;
        })}
      }
      case IDiceActions.RemoveDie: {
        return { ...state, dice: state.dice.remove(action.id)}
      }
      case IDiceActions.RollAll: {
        return { 
            ...state, 
            dice: state.dice.map(die => {
              if (!die.isFrozen) {
                return {
                  ...die,
                  value: generateRolledValue(die.type),
                }
              }
              
              return die;
            })
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