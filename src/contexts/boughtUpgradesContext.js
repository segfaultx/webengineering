import React, {createContext, useState} from "react"

export const BoughtUpgradeContext= createContext()
/**
 *
 * @param children
 * @returns {*}
 * @constructor
 * This Context provider contains a List of boughtUpgrade elements
 */
export const BoughtUpgradeContextProvider=({children})=>{
    const [boughtUpgrades, setBoughtUpgrades] = useState([])

    const value={boughtUpgrades,setBoughtUpgrades}
    return(
        <BoughtUpgradeContext.Provider value={value}>
            {children}
        </BoughtUpgradeContext.Provider>
    )

};