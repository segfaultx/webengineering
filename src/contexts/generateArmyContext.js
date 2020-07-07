import React, {createContext, useState} from "react"

/**
 * This context holds a list of <img> for every bought generator
 * @type {React.Context}
 */

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
