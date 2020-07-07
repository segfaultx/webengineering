import React, {useContext} from "react"
import {Button, Col} from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import pointer from "../../media/images/navbar/swordIcon.png"
import blood from "../../media/images/navbar/Blood_drop.png"
import {motion} from "framer-motion"
import notEnough from "../../media/audio/noEffectClick.mp3"
import {VolumeContext} from "../../../contexts/volumeContext"
import buyG from "../../media/audio/buyGenerator.mp3"

/**
 * This Component renders one Generator based on its parameters
 *
 * @param buyId for sending the required id to the server for buying a generator
 * @param image simply shows the image for this generator
 * @param income_rate property given by the server
 * @param onBuy function which requires a buyId for sending a request to the server
 * @param amount displays the current amount of bought generators
 * @param price displays the price of the next generator
 * @param buyable property for conditional rendering
 * @returns {*}
 * @constructor
 */

const GeneratorComponent =({buyId,image,income_rate, onBuy,amount, price, buyable})=>{
    const {volume} = useContext(VolumeContext)

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


    let audioDenied = new Audio(notEnough)
    audioDenied.preload = 'auto'
    audioDenied.volume = 0.5
    audioDenied.load()

    let audioBuy = new Audio(buyG)
    audioBuy.preload = 'auto'
    audioBuy.volume = 0.5
    audioBuy.load()

    const start = (sound) => {
        let click = sound.cloneNode()
        if(volume) click.play()
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
                            <Button data-testid={`${buyId}_GeneratorTest`} className="buyButtonGenerator" variant={"danger"} onClick={()=>{
                                onBuy(buyId);
                                start(audioBuy)
                            }} >
                                Buy
                            </Button>
                        </motion.div>
                        :
                        <Button className="buyButtonGenerator" variant={"danger"} style={{opacity:"50%"}}
                                onClick={() => start(audioDenied)}>
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