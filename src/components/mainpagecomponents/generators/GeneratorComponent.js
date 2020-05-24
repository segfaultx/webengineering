import React from "react";
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const GeneratorComponent =({id,income_rate,order})=>{

    const buyGenerator=()=> {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJieWtvZiIsImV4cCI6MTU5MDM5NjMzOX0.RZjZkMGwn0WA_AZVNOD7WRxA_gkW5HGYZFNsIjIuwCo"
            } //bearer token von postman mit bykof 123456
        }
        fetch("http://server.bykovski.de:8000/generators/" + id + "/buy", requestOptions)
            .then(response => response.json())
            .then(data => console.log(data.detail))
    }

    return(
        <Container>
            <h4>{`id:${id} IncomeRate:${income_rate} order:${order}`}</h4>
            <Button onClick={buyGenerator}>Buy</Button>
        </Container>
    )
}

export default GeneratorComponent