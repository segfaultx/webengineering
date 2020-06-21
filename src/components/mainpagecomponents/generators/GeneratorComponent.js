import React from "react"
import {Button, Col} from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";


const GeneratorComponent =({buyId,image,income_rate, onBuy,amount,price,buyable})=>{
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
                    {buyable ?
                        <Button className="buyButtonGenerator" variant={"danger"} onClick={()=>{onBuy(buyId)}} >
                            Buy
                        </Button> :
                        <Button className="buyButtonGenerator" variant={"danger"} disabled >
                            Buy
                        </Button>

                    }

                </Col>
            </Row>
            <br/>
        </Container>
    )
}

export default GeneratorComponent