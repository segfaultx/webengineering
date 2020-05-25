import React from "react";
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Cookies from "js-cookie"

const GeneratorComponent =({id,income_rate,order})=>{

    const buyGenerator=()=> {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${Cookies.get("token")}`
            } //bearer token mit bykof 123456
        }
        fetch("http://server.bykovski.de:8000/generators/" + id + "/buy", requestOptions)
            .then(response =>response.json())
            .then(data=>console.log(data))
    }

    return(
        <Container>
            <h4>{`id:${id} IncomeRate:${income_rate} order:${order}`}</h4>
            <Button onClick={buyGenerator}>Buy</Button>
        </Container>
    )
}

export default GeneratorComponent