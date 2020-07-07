import React from "react"
import {Button, Col, Container, Fade} from "react-bootstrap"

/**
 * Component thats supposed to fade in, show a character image and text,
 * also providing a button that triggers a callback function to select the character
 * @param showCharacters boolean to trigger fade animation
 * @param onClick callback function to set selected character
 * @param text character text to display
 * @param type character type/id to pass to select function
 * @param img character image
 * @param title character name/title
 * @returns {*}
 * @constructor
 */
const CharacterFadeComponent = ({showCharacters, onClick, text, type, img, title}) => {


    return (
        <Fade in={showCharacters}>
            <Col className={"characterColContainer"}>
                <Container className={"characterContainer"}>
                    <img src={img} alt={type} className={"characterImage"}/>
                    <div className={"characterName"}>{title}</div>
                    <div className={"characterDescription"}>
                        {text}
                    </div>
                    <Button className={"formBtn"} onClick={() => onClick(type)} id={`${type}_btn`}>
                        Select this Character
                    </Button>
                </Container>
            </Col>
        </Fade>
    )
}

export default CharacterFadeComponent