import React, {useEffect, useState} from "react"
import {Button} from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Cookies from "js-cookie"
import {forEach} from "react-bootstrap/cjs/ElementChildren";

const GeneratorComponent =({id,income_rate, onBuy,amount,price})=>{

    return(
        <Container>
            <h6>{`CPS:${income_rate} next Price:${price} amount:${amount}`}</h6>
            <Button onClick={()=>onBuy(id)} >Buy</Button>
        </Container>
    )
}

export default GeneratorComponent