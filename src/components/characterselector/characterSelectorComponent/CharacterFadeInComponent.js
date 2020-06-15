import React from "react"
import {Button, Col, Container, Fade, Row} from "react-bootstrap";
import archer from "../../media/images/characters/archer_character.png";
import texts from "../../../pages/characterselector/characterTexts";


const CharacterFadeComponent = ({showCharacters, callbackfn, text, type, img, title}) => {


    return (
        <Fade in={showCharacters}>
            <Col className={"characterColContainer"}>
                <Container className={"characterContainer"}>
                    <img src={img} alt={type} className={"characterImage"}/>
                    <div className={"characterName"}>{title}</div>
                    <div className={"characterDescription"}>
                        {text}
                    </div>
                    <Button className={"formBtn"} onClick={() => callbackfn(type)}>
                        Select this Character
                    </Button>
                </Container>
            </Col>
        </Fade>
    )
}

export default CharacterFadeComponent