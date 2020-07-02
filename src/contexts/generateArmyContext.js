import React, {createContext, useState} from "react"

export const GenerateArmyContext = createContext()
export const GenerateArmyContextProvider = ({children}) => {
    const [army, setArmy] = useState([])
    const value = { army, setArmy }
    return (
        <GenerateArmyContext.Provider value={value}>
            {children}
        </GenerateArmyContext.Provider>
    );
};
