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
import CharacterFadeComponent
    from "../../components/characterselector/characterSelectorComponent/CharacterFadeInComponent";

const Characterselectorpage = () => {
    const history = useHistory()
    const [showCharacters, setShowCharacters] = useState(false)
    useEffect(() => {
        setTimeout(() => setShowCharacters(true), 500)
    }, [])

    const setCharacter = (characterName) => {
        Cookies.set("character", characterName, {sameSite: "Strict", secure: false})
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
                <CharacterFadeComponent callbackfn={setCharacter} showCharacters={showCharacters} img={archer}
                                        text={texts.archer} title={"The Archer"} type={"archer"}/>
                <CharacterFadeComponent callbackfn={setCharacter} type={"mage"} showCharacters={showCharacters}
                                        title={"The Mage"} text={texts.mage} img={mage}/>
                <CharacterFadeComponent callbackfn={setCharacter} showCharacters={showCharacters} img={warrior}
                                        type={"warrior"} text={texts.warrior} title={"The Warrior"}/>
                <CharacterFadeComponent callbackfn={setCharacter} showCharacters={showCharacters} img={dragoon}
                                        type={"dragoon"} text={texts.dragoon} title={"The Dragoon"}/>
            </Row>
        </Container>
    </Container>
}

export default Characterselectorpage