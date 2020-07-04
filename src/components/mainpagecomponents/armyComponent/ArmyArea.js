import React, {useContext, useEffect, useState} from "react"
import {GenerateArmyContext} from "../../../contexts/generateArmyContext"
import {ArmyAmountContext} from "../../../contexts/armyAmountContext"
import generatorImages from "../generators/generatorConfig"
import PlayerPlane from "../../media/images/generators/Player-Plane.png"

const ArmyArea=()=>{

    const {army,setArmy}= useContext(GenerateArmyContext)
    const {armyAmount}=useContext(ArmyAmountContext)
    const [prevAmount,setPrevAmount]=useState(undefined)

    useEffect(()=>{
        let sprite=undefined
        if(armyAmount!==undefined){
            let tempArmy=[]
            for(let i=1;i<=Object.keys(generatorImages).length;i++){
                sprite=generatorImages[i].srcB
                let endLoop= armyAmount[i]
                if(prevAmount!==undefined){
                    endLoop=armyAmount[i]-prevAmount[i]
                }
                for(let j=0;j<endLoop;j++){
                    tempArmy.push(<img alt="none" key={Math.random()}
                                                  style={{position:"absolute",
                                                      bottom: 50 + Math.random()*10,
                                                      left:450 + Math.random()*1000,
                                                  zIndex:2}}
                                                  src={sprite}/>)
                        }
                    }
            setArmy([...army,tempArmy])
                }
        setPrevAmount(armyAmount)
    },[armyAmount])

    return(
        <div>
            {army}
            <img className={"playerPlane"} src={PlayerPlane} alt={"alternativtext"}/>
        </div>


    )
}

export default ArmyArea