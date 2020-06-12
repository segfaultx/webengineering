import React, {useEffect, useState} from "react"
import {Button, Col} from "react-bootstrap"
import Container from "react-bootstrap/Container"
import skelleton from "../../media/images/skeletonFront.png"
import elve from "../../media/images/elvesSprites.png"
import assassin from "../../media/images/assassinFrontSprite.png"
import fighter from "../../media/images/FighterFrontSprite.png"
import orkBow from "../../media/images/orkBowFrontSprite.png"
import redhat from "../../media/images/redhatFrontSprite.png"
import lizard from "../../media/images/LizardFrontSprite.png"
import skelletonKing from "../../media/images/SkelletonFrontKing.png"
import Row from "react-bootstrap/Row";

const GeneratorComponent =({id,income_rate, onBuy,amount,price})=>{
    const [sprite,setSprite]=useState("")
useEffect(()=>{
    switch (parseInt(id)) {
        case 1:
            setSprite(skelleton)
            break
        case 2:
            setSprite(elve)
            break
        case 3:
            setSprite(fighter)
            break
        case 4:
            setSprite(assassin)
            break
        case 5:
            setSprite(orkBow)
            break
        case 6:
            setSprite(redhat)
            break
        case 7:
            setSprite(lizard)
            break
        case 12:
            setSprite(skelletonKing)
            break

        default:
            setSprite(skelleton)
    }
})

    return(
        <Container  >
            <Row className={"character"}>
                <Col>
                    <img src={sprite} alt={"None"}/>
                    <h6>CPS: {income_rate}</h6>
                </Col>
                <Col>
                    <h6>amount:{amount}</h6>
                    <h6>next price {price}</h6>
                </Col>
                <Col>
                    <Button className="buyButtonGenerator" variant={"danger"} onClick={()=>onBuy(id)} >Buy</Button>
                </Col>
            </Row>
            <br/>
        </Container>
    )
}

export default GeneratorComponent