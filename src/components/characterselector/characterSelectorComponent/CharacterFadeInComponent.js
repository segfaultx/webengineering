import React from "react"
import {Button, Col, Container, Fade} from "react-bootstrap";


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