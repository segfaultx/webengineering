import React, {createContext, useState} from "react"

export const CPSContext = createContext()
export const CPSContextProvider = ({children}) => {
    const [cps, setCPS] = useState(0)
    const value = { cps, setCPS }
    return (
        <CPSContext.Provider value={value}>
            {children}
        </CPSContext.Provider>
    );
};
