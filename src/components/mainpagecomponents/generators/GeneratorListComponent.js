import React from "react";
import "../mainpagecomponent/mainpagecomponentstyle.css"
import {Col, Container} from "react-bootstrap";

const GeneratorListComponent =()=>{

    /*useEffect(()=>{
        const requestOptions={
            method:"GET",
        }
        fetch("http://server.bykovski.de:8000/generators/available",requestOptions)
            .then(response=>response.json())
            .then(data=>console.log(data))
    })*/

    return(
        <Container className="generatorList">
            <Col>
                <br/>
                <h2>Generator List</h2>
            </Col>
        </Container>
    )
}

export default GeneratorListComponent