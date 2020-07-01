import React, {useContext, useState} from "react"
import {Redirect} from "react-router-dom"
import "./mainpagecomponentstyle.css"
import PlayerPlane from "../../components/media/images/generators/Player-Plane.png"
import MonsterPlane from "../../components/media/images/clickercomp/Monster-Plane.png"
import MainPageHeader from "../../components/mainpagecomponents/headercomponent/MainPageHeaderComponent"
import GeneratorListComponent from "../../components/mainpagecomponents/generators/GeneratorListComponent"
import UpgradeListComponent from "../../components/mainpagecomponents/upgrades/UpgradeListComponent"
import {Container, Row, Col, Button} from "react-bootstrap"
import {ClickContextProvider} from "../../contexts/clickContext"
import {CPSContextProvider} from "../../contexts/cpsContext"
import {GenerateArmyContextProvider} from "../../contexts/generateArmyContext"
import Cookies from "js-cookie"
import Clickercomponent from "../../components/mainpagecomponents/clickercomponent/Clickercomponent"
import ArmyArea from "../../components/mainpagecomponents/armyComponent/ArmyArea";
import {VolumeContextProvider} from "../../contexts/volumeContext";
import {ArmyAmountProvider} from "../../contexts/armyAmountContext";
import {LevelUpContext, LevelUpContextProvider} from "../../contexts/levelUpContext";
import {BoughtUpgradeContext, BoughtUpgradeContextProvider} from "../../contexts/boughtUpgradesContext";
import avatarConfig from "./avatarConfig";

const MainPage = () => {

    const {boughtUpgrades}=useContext(BoughtUpgradeContext)
    const {backgroundImage}=useContext(LevelUpContext)

    let background = {
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImage.backgroundImages[boughtUpgrades.length]})`,
        backgroundSize: "cover",
        backgroundColor: "black"
    }
    let render = <Redirect to={"/login"}/>
    if (!Cookies.get("character")) return <Redirect to={"/characterselect"}/>
    if (Cookies.get("token")) {
        render =
            <GenerateArmyContextProvider>
                <ClickContextProvider>
                    <CPSContextProvider>
                        <VolumeContextProvider>
                            <ArmyAmountProvider>
                            <Container className="container" fluid style={background} >
                                <Row>
                                    <MainPageHeader/>
                                </Row>
                                <Row className="playarea">
                                    <Col className={"generatorCol"}>
                                        <GeneratorListComponent className="playareaComponents"/>
                                    </Col>
                                    <Col className={"gameCol"}>
                                        <Row className={"bossArea"}>
                                            <Col>
                                                <h2>BossArea</h2>
                                                <Row>
                                                    <Col>
                                                        <Clickercomponent initialCounterValue={0}/>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <img className={"monsterPlane"} src={MonsterPlane}/>
                                                    </Col>
                                                </Row>
                                            </Col>

                                            </Row>
                                            <Row className={"armyArea"}>
                                                <Col>
                                                    <img className={"avatar"}
                                                         src={avatarConfig[Cookies.get("character")]}/>
                                                    <ArmyArea/>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col className={"upgradeCol"}>
                                            <UpgradeListComponent className="playareaComponents"/>
                                        </Col>
                                    </Row>
                                    <Row className={"playerPlaneContainer"}>
                                        <img className={"playerPlane"} src={PlayerPlane}/>
                                    </Row>
                                </Container>
                            </ArmyAmountProvider>
                        </VolumeContextProvider>
                    </CPSContextProvider>
                </ClickContextProvider>
            </GenerateArmyContextProvider>
    }
    return render
}


export default MainPage