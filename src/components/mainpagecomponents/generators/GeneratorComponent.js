import React from "react"
import {Button, Col} from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import pointer from "../../media/images/navbar/swordIcon.png";
import blood from "../../media/images/navbar/Blood_drop.png";
import {motion} from "framer-motion";


const GeneratorComponent =({buyId,image,income_rate, onBuy,amount, price, buyable})=>{

    const shortening = (num) => {
        if(num < 1000000) return num

        let abbreviatedNum = num
        const suffix = ["", "", " Mil", " Bil", " Tri", " Quad", " Quint", " Sext", " Sept", " Oct.", " Nont"]
        let suffixIndex = 0
        while( abbreviatedNum >= 1000){
            abbreviatedNum /= 1000
            suffixIndex++
        }

        abbreviatedNum = Math.round((abbreviatedNum + Number.EPSILON) * 100) / 100
        abbreviatedNum += suffix[suffixIndex]

        return abbreviatedNum
    }

    return(
        <Container>
            <Row className={"character"}>
                <Col>
                    <img src={image.srcF} alt={"None"}/>
                    <h6> {image.title}</h6>
                </Col>
                <Col style={{marginLeft: "2vw", marginTop: "1vh"}}>
                    <h6 className="cps">
                        +{income_rate}
                        <img src={pointer} alt="CPS: " width="20vw" height="20vh"/>
                    </h6>
                    <h6 className="price">
                        -{shortening(price)}
                        <img src={blood}  alt="Blood: " width="15vh" height = "20vh"/>
                    </h6>
                </Col>
                <Col>
                    <h6 style={{fontSize: "20px"}}>x{amount}</h6>

                    {buyable ?
                        <motion.div whileHover={{ scale: 1.1}} whileTap={{ scale: 0.9}}>
                            <Button className="buyButtonGenerator" variant={"danger"} onClick={()=>{onBuy(buyId)}} >
                                Buy
                            </Button>
                        </motion.div>:
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