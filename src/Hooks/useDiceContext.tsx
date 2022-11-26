import React, { createContext, useReducer } from "react";
import { DieType, IDiceCollection, IDie } from "../types";
import { createNewDieWithType, generateId, generateRolledValue } from "../Utils/utils";
import { getDieFromLocalStorage, saveDieSetToLocalStorage } from "../Utils/localStorageUtils";

interface IDiceState {
    dice: IDiceCollection;
    isRolling: boolean;
}

export enum IDiceActions {
    AddDie = 'AddDie',
    EditDie = 'EditDie',
    ToggleFreeze = 'ToggleFreeze',
    RemoveDie = 'RemoveDie',
    ResetBoard = 'ResetBoard',
    RollAll = 'RollAll',
}

type IDiceActionPackages = 
    {type: IDiceActions.AddDie, dieType: DieType} | 
    {type: IDiceActions.EditDie, dieID: string, die: IDie} | 
    {type: IDiceActions.ToggleFreeze, id: string} | 
    {type: IDiceActions.RemoveDie, id: string} |
    {type: IDiceActions.ResetBoard} |
    {type: IDiceActions.RollAll}

export interface IUseDicePackage {
  state: IDiceState, 
  dispatch: React.Dispatch<IDiceActionPackages>
}

const initialState: IDiceState = {    
    dice: getDieFromLocalStorage(),
    isRolling: false,
}

const actionsToOmitFromLocalStorageSaving = [
  IDiceActions.RollAll,
]

function diceHandlerReducerLocalStorageInterceptor(state: IDiceState, action: IDiceActionPackages): IDiceState {
  const newState = diceHandlerReducer(state, action);
  
  if (!actionsToOmitFromLocalStorageSaving.includes(action.type)) {
    saveDieSetToLocalStorage(newState.dice);
  }

  return newState;
}

function diceHandlerReducer(state: IDiceState, action: IDiceActionPackages): IDiceState {
    switch (action.type) {
      case IDiceActions.AddDie: {
        const id = generateId();
        return { ...state, dice: state.dice.set(id, createNewDieWithType(action.dieType))}
      }
      case IDiceActions.EditDie: {
        return { ...state, dice: state.dice.set(action.dieID, action.die)}
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
      case IDiceActions.ResetBoard: {
        return { ...state, dice: state.dice.clear()}
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
    const [state, dispatch] = useReducer(diceHandlerReducerLocalStorageInterceptor, initialState)

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