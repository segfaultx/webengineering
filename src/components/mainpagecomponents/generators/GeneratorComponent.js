import React from "react"
import {Button, Col} from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";


const GeneratorComponent =({buyId,spriteId,image,income_rate, onBuy,amount,price})=>{
    return(
        <Container>
            <Row className={"character"}>
                <Col>
                    <img src={image.srcF} alt={"None"}/>
                    <h6>CPS: {income_rate}</h6>
                </Col>
                <Col>
                    <h6>amount:{amount}</h6>
                    <h6>next price {price}</h6>
                </Col>
                <Col>
                    <Button className="buyButtonGenerator" variant={"danger"} onClick={()=>{onBuy(buyId,spriteId)}} >Buy</Button>
                </Col>
            </Row>
            <br/>
        </Container>
    )
}

export default GeneratorComponent