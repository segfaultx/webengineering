import React, {useState, useEffect} from "react"

import {useHistory} from "react-router-dom"
import {Container, Row, Col, Fade, Button} from "react-bootstrap"
import Cookies from "js-cookie"

import "../shared_styles/SharedPagesStyle.css"
import "./CharacterSelectorPageStyle.css"

import archer from "../../components/media/images/characters/archer_character.png"
import mage from "../../components/media/images/characters/mage_character.png"
import warrior from "../../components/media/images/characters/warrior_character.png"
import dragoon from "../../components/media/images/characters/dragoon_character.png"
import texts from "./characterTexts"

const Characterselectorpage = () => {
    const history = useHistory()
    const [showCharacters, setShowCharacters] = useState([false, false, false, false])
    useEffect(() => {
        setTimeout(() => setShowCharacters([true, true, true, true]), 500)

    }, [])

    const setCharacter = (characterName) => {
        Cookies.set("character", characterName, {sameSite: "Strict", secure: false})
        console.log(Cookies.get("character"))
        history.push("/")
    }
    return <Container fluid className={"bgContainer"}>
        <Container className={"characterSelectContainer"}>
            <Row className={"headerRow"}>
                <Container className={"headerContainer"}>
                    <h2>Choose your Character</h2>
                </Container>
            </Row>
            <Row className={"characterSelectRow"}>
                <Fade in={showCharacters[0]}>
                    <Col className={"characterColContainer"}>
                        <Container className={"characterContainer"}>
                            <img src={archer} alt={"archer"} className={"characterImage"}/>
                            <div className={"characterName"}>The Archer</div>
                            <div className={"characterDescription"}>
                                {texts.archer}
                            </div>
                            <Button className={"formBtn"} onClick={() => setCharacter("archer")}>
                                Select this Character
                            </Button>
                        </Container>

                    </Col>
                </Fade>
                <Fade in={showCharacters[1]}>
                    <Col className={"characterColContainer"}>
                        <Container className={"characterContainer"}>
                            <img src={mage} alt={"mage"} className={"characterImage"}/>
                            <div className={"characterName"}>The Mage</div>
                            <div className={"characterDescription"}>
                                {texts.mage}
                            </div>
                            <Button className={"formBtn"} onClick={() => setCharacter("mage")}>
                                Select this Character
                            </Button>
                        </Container>
                    </Col>
                </Fade>
                <Fade in={showCharacters[2]}>
                    <Col className={"characterColContainer"}>
                        <Container className={"characterContainer"}>
                            <img src={warrior} alt={"warrior"} className={"characterImage"}/>
                            <div className={"characterName"}>The Warrior</div>
                            <div className={"characterDescription"}>
                                {texts.warrior}
                            </div>
                            <Button className={"formBtn"} onClick={() => setCharacter("warrior")}>
                                Select this Character
                            </Button>
                        </Container>
                    </Col>
                </Fade>
                <Fade in={showCharacters[3]}>
                    <Col className={"characterColContainer"}>
                        <Container className={"characterContainer"}>
                            <img src={dragoon} alt={"dragoon"} className={"characterImage"}/>
                            <div className={"characterName"}>The Dragoon</div>
                            <div className={"characterDescription"}>
                                {texts.dragoon}
                            </div>
                            <Button className={"formBtn"} onClick={() => setCharacter("dragoon")}>
                                Select this Character
                            </Button>
                        </Container>
                    </Col>
                </Fade>
            </Row>
        </Container>
    </Container>
}

export default Characterselectorpage