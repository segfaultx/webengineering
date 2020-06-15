import React, {useContext} from "react";
import {Container} from "react-bootstrap";
import {GenerateArmyContext} from "../../../contexts/generateArmyContext";


const GenerateSprite=()=>{

    const {army}=useContext(GenerateArmyContext)
    return(
        <Container>
            {army}
        </Container>
    )
}

export default GenerateSprite