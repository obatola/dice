import React, { createContext, useReducer } from "react";

export enum MenuTypes {
  DieCustomization = 'DieCustomization',
  Settings = 'Settings'
}

interface IAppState {
  isMenuOpen: boolean;
  menuType?: MenuTypes;
  dieID?: string;
}

export enum IAppActions {
    OpenSettingsMenu = 'OpenSettingsMenu',
    OpenDiceCustomizationMenu = 'OpenDiceCustomizationMenu',
    CloseMenu = 'CloseMenu',
}

type IAppActionPackages = 
    {type: IAppActions.OpenSettingsMenu } | 
    {type: IAppActions.OpenDiceCustomizationMenu, dieID: string } | 
    {type: IAppActions.CloseMenu}

export interface IUseAppPackage {
  state: IAppState, 
  dispatch: React.Dispatch<IAppActionPackages>
}

const initialState: IAppState = {    
    isMenuOpen: false,
    menuType: undefined,
}

function appHandlerReducer(state: IAppState, action: IAppActionPackages): IAppState {
    switch (action.type) {
      case IAppActions.OpenSettingsMenu: {
        return {
            ...state,
            isMenuOpen: true,
            menuType: MenuTypes.Settings,
         }
      }
      case IAppActions.OpenDiceCustomizationMenu: {
        return {
            ...state,
            isMenuOpen: true,
            menuType: MenuTypes.DieCustomization,
            dieID: action.dieID,
         }
      }
      case IAppActions.CloseMenu: {
        return {
            ...state,
            isMenuOpen: false,
            menuType: undefined,
            dieID: undefined
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