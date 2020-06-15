import React, {useContext} from "react";
import {Container} from "react-bootstrap";
import {GenerateArmyContext} from "../../../contexts/generateArmyContext";


const GenerateSprite=()=>{

    const {army,setArmy}=useContext(GenerateArmyContext)

    /*function createSprite() {
        console.log("created Sprite")
        setArmy(army=>[...army,<img style={{position:"absolute",bottom:30+Math.random()*30, left:-20+Math.random()*1000}} src={skelleton}/>])
    }*/

    return(
        <Container>
            {army}
        </Container>
    )
}

export default GenerateSprite