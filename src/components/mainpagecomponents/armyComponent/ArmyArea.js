import React, {useContext, useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {GenerateArmyContext} from "../../../contexts/generateArmyContext";
import {ArmyAmountContext} from "../../../contexts/armyAmountContext";
import generatorImages from "../generators/generatorConfig";

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
                    //if(prevAmount[i]>=10) continue
                    endLoop=armyAmount[i]-prevAmount[i]
                }
                for(let j=0;j<endLoop;j++){
                    tempArmy.push(<img alt="none" key={Math.random()}
                                                  style={{position:"absolute",
                                                      bottom:-100+Math.random()*60,
                                                      left:20+Math.random()*1000,
                                                  zIndex:2}}
                                                  src={sprite}/>)
                        }
                    }
            setArmy([...army,tempArmy])
                }
        setPrevAmount(armyAmount)
    },[armyAmount])

    return(
        <Container>
            {army}
        </Container>
    )
}

export default ArmyArea