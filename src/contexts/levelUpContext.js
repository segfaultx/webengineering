import React, {createContext, useState} from "react"
import dImg1 from "../components/media/images/login_background_screen.jpg";
import dImg2 from "../components/media/images/UHpNxb.jpg";
import dImg3 from "../components/media/images/kJVa6H.jpg";
import dImg4 from "../components/media/images/kZPyQB.jpg";
import dImg5 from "../components/media/images/binary-numbers-tunnel.jpg";
import level1Monster from "../components/media/images/monster/Megapack III Undead Warrior Benkei.png";
import level2Monster from "../components/media/images/monster/Megapack III Red Guard A.png";
import level3Monster from "../components/media/images/monster/Megapack III Fallen Kings Arcane King Jeffroy.png";
import level4Monster from "../components/media/images/monster/Megapack III Elemental Lords Ice Maiden.png";
import level5Monster from "../components/media/images/monster/Megapack III Zodiac Aries.png";

export const levelUpContext= createContext()
export const levelUpContextProvider=({children})=>{
    const [backgroundImage, setBackgroundImage] = useState({
        "backgroundImages": [dImg1, dImg2, dImg3, dImg4, dImg5],
        "currentBackground": dImg1,
        "backgroundCounter": 0
    });

    const [monsterImage, setMonsterImage] = useState({
        "monsterImages": [level1Monster, level2Monster, level3Monster, level4Monster, level5Monster],
        "currentMonster": level1Monster,
        "upgradeCounter": 0
    });

    const value={backgroundImage,setBackgroundImage,monsterImage,setMonsterImage}
    return(
        <levelUpContext.Provider value={value}>
            {children}
        </levelUpContext.Provider>
    )
};