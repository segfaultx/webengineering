import React, {useState} from "react";
import {Container} from "react-bootstrap";
import GenerateSprite from "./GenerateSprite";

const ArmyArea=()=>{
    return(
        <Container className={"armyContainer"}>
            <GenerateSprite/>
        </Container>
    )
}

export default ArmyArea