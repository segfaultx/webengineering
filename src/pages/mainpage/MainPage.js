import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import {Redirect} from "react-router-dom"
import "./mainpagecomponentstyle.css"
import dImg1 from "../../components/media/images/login_background_screen.jpg"
import dImg2 from "../../components/media/images/UHpNxb.jpg"
import dImg3 from "../../components/media/images/kJVa6H.jpg"
import dImg4 from "../../components/media/images/kZPyQB.jpg"
import dImg5 from "../../components/media/images/binary-numbers-tunnel.jpg"
import MainPageHeader from "../../components/mainpagecomponents/headercomponent/MainPageHeaderComponent"
import GeneratorListComponent from "../../components/mainpagecomponents/generators/GeneratorListComponent"
import UpgradeListComponent from "../../components/mainpagecomponents/upgrades/UpgradeListComponent"
import {Container, Row, Col, Button} from "react-bootstrap"
import {ClickContextProvider} from "../../contexts/clickContext"
import {CPSContextProvider} from "../../contexts/cpsContext"
import {GenerateArmyContextProvider} from "../../contexts/generateArmyContext"
import Cookies from "js-cookie"
import Clickercomponent from "../../components/mainpagecomponents/clickercomponent/Clickercomponent"
import ArmyArea from "../../components/mainpagecomponents/generators/ArmyArea";


const MainPage = () => {

    const [backgroundImage, setBackgroundImage] = useState({
        "backgroundImages": [dImg1, dImg2, dImg3, dImg4, dImg5],
        "currentBackground": dImg1,
        "backgroundCounter": 0
    })



    function handleBackgroundChange() {
        backgroundImage.backgroundCounter < backgroundImage.backgroundImages.length - 1
            ?
            setBackgroundImage({
                ...backgroundImage,
                backgroundCounter: backgroundImage.backgroundCounter += 1,
                currentBackground: backgroundImage.backgroundImages[backgroundImage.backgroundCounter]
            })
            :
            setBackgroundImage({
                ...backgroundImage,
                backgroundCounter: backgroundImage.backgroundCounter = 0,
                currentBackground: backgroundImage.backgroundImages[backgroundImage.backgroundCounter]
            })
    }

    let background = {
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImage.currentBackground})`,
        backgroundSize: "cover",
        backgroundColor: "black"
    }
    let render = <Redirect to={"/login"}/>
    if (Cookies.get("token")) {
        render = <Container className="wrapper" fluid style={background}>
            <GenerateArmyContextProvider>
                <ClickContextProvider>
                    <CPSContextProvider>
                        <Row className="maincontainer">
                            <h2 className="gamename" style={{color: "white"}}>ClickerGame</h2>
                            <MainPageHeader/>
                        </Row>

                        <Row className="playarea">
                            <Col>
                                <GeneratorListComponent className="playareaComponents"/>
                            </Col>
                            <Col xs={6} >
                                <Row className={"bossArea"}>
                                    <Col>
                                        <h2>BossArea</h2>
                                        <Button name="backgroundCounter" variant="dark" className={"changeBackground"} onClick={() => {
                                            handleBackgroundChange()}}>
                                            change Background
                                        </Button>
                                    </Col>
                                </Row>
                                <Row className={"armyArea"}>
                                    <Col>
                                        <ArmyArea/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <UpgradeListComponent className="playareaComponents"/>
                            </Col>
                        </Row>
                    </CPSContextProvider>
                </ClickContextProvider>
            </GenerateArmyContextProvider>

            <Row>
                <Col>
                    <Clickercomponent initialCounterValue={0}/>
                </Col>
            </Row>
        </Container>
    }
    return render
}


export default MainPage
