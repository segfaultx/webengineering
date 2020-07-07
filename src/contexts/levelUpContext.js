import React, {createContext, useState} from "react"
import {backgroundImages, monsterList} from "./levelUpConfig"

export const LevelUpContext= createContext()
export const LevelUpContextProvider=({children})=>{
    const [backgroundImage, setBackgroundImage] = useState(backgroundImages)

    const [monsterImage, setMonsterImage] = useState(monsterList)

    const value={backgroundImage,setBackgroundImage,monsterImage,setMonsterImage}
    return(
        <LevelUpContext.Provider value={value}>
            {children}
        </LevelUpContext.Provider>
    )
};