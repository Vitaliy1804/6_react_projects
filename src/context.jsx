import React from 'react';
import { useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    return (
    <AppContext.Provider value={{name: 'John', age: '34', role: 'student'}}>
        {children}
    </AppContext.Provider>
)}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}