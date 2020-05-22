import React, {useContext, useState} from "react";
import {CPSContext, CPSContextProvider} from "../mainpagecomponent/cpsContext";
import {Button, Container, Row} from "react-bootstrap";


const ShowCPSComponent=()=>{

    const [generator,setGenerator]=useState({
        "generators":[2,5,10,20],
        "gCounter":0,
    })

    const {cps,setCPS}= useContext(CPSContext)
    const onClick= ()=> {
        if(generator.gCounter<=generator.generators.length-1){
             setGenerator({...generator,
                gCounter: generator.gCounter+1})
            setCPS(generator.generators[generator.gCounter])
        }
    }


    return(
        <Container>
            <Row className={"showCPS"}>
                <h2>CPS:{cps}</h2>
                <Button type={"button"} onClick={onClick}>Buy Generator</Button>
            </Row>
        </Container>
    )
}

export default ShowCPSComponent