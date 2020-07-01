import React, {useContext, useState} from "react"
import {useHistory} from "react-router-dom"
import {Redirect} from "react-router-dom"
import "./mainpagecomponentstyle.css"
import dImg1 from "../../components/media/images/backgrounds/login_background_screen.jpg"
import dImg2 from "../../components/media/images/backgrounds/cthulu_dungeon.jpg"
import dImg3 from "../../components/media/images/backgrounds/text_wall.jpg"
import dImg4 from "../../components/media/images/backgrounds/dungeon_stairs.jpg"
import PlayerPlane from "../../components/media/images/generators/Player-Plane.png"
import level1Monster from "../../components/media/images/monster/Megapack III Undead Warrior Benkei.png"
import level2Monster from "../../components/media/images/monster/Megapack III Red Guard A.png"
import level3Monster from "../../components/media/images/monster/Megapack III Fallen Kings Arcane King Jeffroy.png"
import level5Monster from "../../components/media/images/monster/Megapack III Zodiac Aries.png"
import level4Monster from "../../components/media/images/monster/Megapack III Elemental Lords Ice Maiden.png"
import MonsterPlane from "../../components/media/images/clickercomp/Monster-Plane.png"
import dImg5 from "../../components/media/images/backgrounds/binary-numbers-tunnel.jpg"
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
import BackgroundComponent from "../../components/mainpagecomponents/backgroundComponent/BackgroundComponent";
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
                                    <Row>
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