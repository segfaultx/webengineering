import React, {useContext} from "react"

import {Redirect} from "react-router-dom"
import Cookies from "js-cookie"
import {Container, Row, Col} from "react-bootstrap"

import "./mainpagecomponentstyle.css"

import MonsterPlane from "../../components/media/images/clickercomp/Monster-Plane.png"
import MainPageHeader from "../../components/mainpagecomponents/headercomponent/MainPageHeaderComponent"
import GeneratorListComponent from "../../components/mainpagecomponents/generators/GeneratorListComponent"
import UpgradeListComponent from "../../components/mainpagecomponents/upgrades/UpgradeListComponent"

import {ClickContextProvider} from "../../contexts/clickContext"
import {CPSContextProvider} from "../../contexts/cpsContext"
import {GenerateArmyContextProvider} from "../../contexts/generateArmyContext"
import Clickercomponent from "../../components/mainpagecomponents/clickercomponent/Clickercomponent"
import ArmyArea from "../../components/mainpagecomponents/armyComponent/ArmyArea"
import {VolumeContextProvider} from "../../contexts/volumeContext"
import {ArmyAmountProvider} from "../../contexts/armyAmountContext"
import {LevelUpContext} from "../../contexts/levelUpContext"
import {BoughtUpgradeContext} from "../../contexts/boughtUpgradesContext"
import avatarConfig from "./avatarConfig"

/**
 * Mainpage component, which represents the application in a logged in state.
 * Contains Upgrades on left hand side, click element in the middle and upgrades on the right hand side.
 * Bottom contains the army area where our generators are being rendered
 * @returns {*}
 * @constructor
 */
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
                            <Container className="wrapper" fluid style={background} >
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
                                                <Row>
                                                    <Col>
                                                        <Clickercomponent initialCounterValue={0}/>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <img className={"monsterPlane"} src={MonsterPlane} alt={"monsterplane bild"}/>
                                                    </Col>
                                                </Row>
                                            </Col>

                                            </Row>
                                            <Row className={"armyArea"}>
                                                <Col>
                                                    <img className={"avatar"}
                                                         src={avatarConfig[Cookies.get("character")]} alt={"avatarbild"}/>

                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col className={"upgradeCol"}>
                                            <UpgradeListComponent className="playareaComponents"/>
                                        </Col>
                                    </Row>
                                    <Row className={"playerPlaneContainer"}>
                                        <ArmyArea/>
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