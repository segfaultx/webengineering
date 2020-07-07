import React, {createContext, useState} from "react"

/**
 * This context is filled by the GeneratorListComponent and is used by the ArmyAreaComponent.
 * It provides the amount of each bought generator.
 * @type {React.Context}
 */

export const ArmyAmountContext = createContext()
export const ArmyAmountProvider = ({children}) => {
    const [armyAmount, setArmyAmount] = useState(undefined)
    const value = { armyAmount, setArmyAmount }
    return (
        <ArmyAmountContext.Provider value={value}>
            {children}
        </ArmyAmountContext.Provider>
    );
};
