import React, {createContext, useState} from "react";
import {LevelUpContext} from "./levelUpContext";

export const BoughtUpgradeContext= createContext()
export const BoughtUpgradeContextProvider=({children})=>{
    const [boughtUpgrades, setBoughtUpgrades] = useState([])

    const value={boughtUpgrades,setBoughtUpgrades}
    return(
        <BoughtUpgradeContext.Provider value={value}>
            {children}
        </BoughtUpgradeContext.Provider>
    )

};