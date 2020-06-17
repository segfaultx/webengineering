import React, {useContext} from "react";
import {LevelUpContext} from "../../../contexts/levelUpContext";
import {BoughtUpgradeContext} from "../../../contexts/boughtUpgradesContext";


const BackgroundComponent=()=>{

    const {boughtUpgrades}=useContext(BoughtUpgradeContext)
    const {backgroundImage}=useContext(LevelUpContext)

    return(
       
            <img src={backgroundImage.backgroundImages[boughtUpgrades.length]} alt={"HIER IST DER BACKGROUND"} />

    )

}


export default BackgroundComponent