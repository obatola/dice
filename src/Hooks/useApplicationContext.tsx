import React, { createContext, useReducer } from "react";

interface IAppState {
    isMenuOpen: boolean;
}

export enum IAppActions {
    OpenMenu = 'OpenMenu',
    CloseMenu = 'CloseMenu',
}

type IAppActionPackages = 
    {type: IAppActions.OpenMenu} | 
    {type: IAppActions.CloseMenu}

export interface IUseAppPackage {
  state: IAppState, 
  dispatch: React.Dispatch<IAppActionPackages>
}

const initialState: IAppState = {    
    isMenuOpen: false,
}

function appHandlerReducer(state: IAppState, action: IAppActionPackages): IAppState {
    switch (action.type) {
      case IAppActions.OpenMenu: {
        return {
            ...state,
            isMenuOpen: true,
         }
      }
      case IAppActions.CloseMenu: {
        return {
            ...state,
            isMenuOpen: false,
         }
      }
      default: {
        // @ts-ignore
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
  }

const AppContext = createContext<IUseAppPackage | null>(null);
AppContext.displayName = 'AppContext'

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(appHandlerReducer, initialState)

    return (<AppContext.Provider value={{state, dispatch}}>
        {children}
    </AppContext.Provider>)
}

export const useApp = (): IUseAppPackage => {
    const context = React.useContext(AppContext);
    
    if (!context) {
      throw new Error(
        'useApp must be used within a AppContextProvider',
      )
    }

    return context;
}