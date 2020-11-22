import React, { useReducer, createContext } from 'react';
import defaultContext from "./defaultContext";
import { saveToStorage } from '../../utils/localStorage';
import { STORAGE_KEY } from '../../constants/locale';

const AppContext = createContext();

let reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return defaultContext;
        case "setLocale":
            saveToStorage(STORAGE_KEY, action.locale);
            return { ...state, locale: action.locale };
    }
};

const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultContext);
    const value = { state, dispatch };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppContextProvider };