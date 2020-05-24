import React, { useState,useEffect} from "react";
import "./mainpagecomponentstyle.css"
import dImg1 from "../../media/images/login_background_screen.jpg"
import dImg2 from "../../media/images/UHpNxb.jpg"
import dImg3 from "../../media/images/kJVa6H.jpg"
import dImg4 from "../../media/images/kZPyQB.jpg"
import dImg5 from "../../media/images/binary-numbers-tunnel.jpg"
import MainPageHeader from "./MainPageHeaderComponent";
import GeneratorListComponent from "../generators/GeneratorListComponent";
import UpgradeListComponent from "../upgrades/UpgradeListComponent";
import {Container, Row, Col, Button} from "react-bootstrap";
import {ClickContextProvider} from "./clickContext";
import {CPSContextProvider} from "./cpsContext";


const MainPageComponent=()=>{

    /*const ws= new WebSocket("ws://server.bykovski.de:8000/game/click?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJieWtvZiIsImV4cCI6MTU5MDM5NjMzOX0.RZjZkMGwn0WA_AZVNOD7WRxA_gkW5HGYZFNsIjIuwCo")



    useEffect(()=>{
        ws.onopen=()=>{
            ws.send("click")
            console.log("open")
        }

        ws.onmessage=(e)=>{
            console.log('message',e.data)
            ws.close()
        }

        ws.onclose=()=>{
            console.log("close")
        }
    })*/


    const[backgroundImage,setBackgroundImage]=useState({
        "backgroundImages":[dImg1,dImg2,dImg3,dImg4,dImg5],
        "currentBackground":dImg1,
        "backgroundCounter":0})

    function handleBackgroundChange() {
        backgroundImage.backgroundCounter<backgroundImage.backgroundImages.length-1
            ?
            setBackgroundImage({...backgroundImage,
                backgroundCounter: backgroundImage.backgroundCounter+=1,
                currentBackground: backgroundImage.backgroundImages[backgroundImage.backgroundCounter]})
            :
            setBackgroundImage({...backgroundImage,
                backgroundCounter: backgroundImage.backgroundCounter=0,
                currentBackground: backgroundImage.backgroundImages[backgroundImage.backgroundCounter]})
    }

    let background={
        width:"100vw",
        height:"100vh",
        backgroundImage:`url(${backgroundImage.currentBackground})`,
        backgroundSize:"cover",
        backgroundColor:"black"
    }

    return(
        <Container className="wrapper" fluid style={background}>
                <Row className="maincontainer">
                    <h2 className="gamename" style={{color:"white"}}>ClickerGame</h2>
                    <CPSContextProvider>
                        <ClickContextProvider>
                            <MainPageHeader/>
                        </ClickContextProvider>
                    </CPSContextProvider>
                </Row>

                <Row className="playarea">
                    <Col>
                        <GeneratorListComponent className="playareaComponents"/>
                    </Col>

                    <Col xs={7}className={"mainPage"}>
                        <h2>Mainpage</h2>
                        <Button name="backgroundCounter" variant="dark" className={"changeBackground"} onClick={()=>{handleBackgroundChange()}}>change Background</Button>
                    </Col>

                    <Col >
                        <UpgradeListComponent className="playareaComponents"/>
                    </Col>
                </Row>
        </Container>
)
}

export default MainPageComponent