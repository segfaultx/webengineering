import React from "react";
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const GeneratorComponent =({id,income_rate,order})=>{

    return(
        <Container>
            <h4>{`id:${id} IncomeRate:${income_rate} order:${order}`}</h4>
            <Button>Buy</Button>
        </Container>
    )
}

export default GeneratorComponent