import React, {createContext, useState} from "react"
import dImg1 from "../components/media/images/backgrounds/login_background_screen.jpg";
import dImg2 from "../components/media/images/backgrounds/dungeon1.jpg";
import dImg3 from "../components/media/images/backgrounds/dungeon_stairs.jpg";
import dImg4 from "../components/media/images/backgrounds/dungeon5.jpg";
import dImg5 from "../components/media/images/backgrounds/text_wall.jpg";
import dImg6 from "../components/media/images/backgrounds/dungeon2.jpg";
import dImg7 from "../components/media/images/backgrounds/dungeon3.jpg";
import dImg8 from "../components/media/images/backgrounds/dungeon4.jpg";
import dImg9 from "../components/media/images/backgrounds/binary-numbers-tunnel.jpg";
import level1Monster from "../components/media/images/monster/Megapack III Undead Warrior Benkei.png";
import level2Monster from "../components/media/images/monster/Megapack III Red Guard A.png";
import level3Monster from "../components/media/images/monster/Megapack III Fallen Kings Arcane King Jeffroy.png";
import level4Monster from "../components/media/images/monster/Megapack III Elemental Lords Ice Maiden.png";
import level5Monster from "../components/media/images/monster/Megapack III Zodiac Aries.png";
import level6Monster from "../components/media/images/monster/Megapack III Elemental Lords Fire Lord.png";
import level7Monster from "../components/media/images/monster/Megapack III Black Iron Minotaur Beef.png";
import level8Monster from "../components/media/images/monster/Megapack III Dragonslayer Dwarf.png"
import level9Monster from "../components/media/images/monster/Megapack III Hellhound Inferni.png"

export const LevelUpContext= createContext()
export const LevelUpContextProvider=({children})=>{
    const [backgroundImage, setBackgroundImage] = useState({
        "backgroundImages": [dImg1, dImg2, dImg3, dImg4, dImg5, dImg6, dImg7, dImg8, dImg9],
        "currentBackground": dImg2,
        "backgroundCounter": 0
    });

    const [monsterImage, setMonsterImage] = useState({
        "monsterImages": [level1Monster, level2Monster, level3Monster, level4Monster, level5Monster,level6Monster,
            level7Monster,level8Monster, level9Monster],
        "currentMonster": level1Monster,
        "upgradeCounter": 0
    });

    const value={backgroundImage,setBackgroundImage,monsterImage,setMonsterImage}
    return(
        <LevelUpContext.Provider value={value}>
            {children}
        </LevelUpContext.Provider>
    )
};