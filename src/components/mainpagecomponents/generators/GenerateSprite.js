import React, {useState} from "react";
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import skelleton from "../../media/images/skeletonFront.png"


const GenerateSprite=(img,xPos,yPos)=>{

    const [army,setArmy]=useState([])

    function createSprite() {
        console.log("created Sprite")
        setArmy(army=>[...army,<img style={{position:"absolute",bottom:30+Math.random()*30, left:Math.random()*1150}} src={skelleton}/>])
    }

    return(
        <Container>
            <Button onClick={createSprite}>generate</Button>
            {army}
        </Container>
    )
}

export default GenerateSprite