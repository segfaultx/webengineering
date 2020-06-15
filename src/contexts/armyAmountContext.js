import React, {createContext, useState} from "react"

export const ArmyAmountContext = createContext()
export const ArmyAmountProvider = ({children}) => {
    const [armyAmount, setArmyAmount] = useState([])
    const value = { armyAmount, setArmyAmount }
    return (
        <ArmyAmountContext.Provider value={value}>
            {children}
        </ArmyAmountContext.Provider>
    );
};
