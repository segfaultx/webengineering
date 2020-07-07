import React, {createContext, useState} from "react"
import {backgroundImages, monsterList} from "./levelUpConfig"

export const LevelUpContext= createContext()
/**
 *
 * @param children
 * @returns {*}
 * @constructor
 * This Context provider has a backgroundImage UseState which contains a List of backgroundImages an a current background.
 * The monsterImage Use State contains a List of monster Images and a current Monster
 */
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