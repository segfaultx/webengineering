import React, {useEffect, useState} from "react"
import {Button} from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Cookies from "js-cookie"
import {forEach} from "react-bootstrap/cjs/ElementChildren";

const GeneratorComponent =({id,income_rate, amountInit})=>{

    const [nextPriceState,setNextPrice]=useState(0)
    const [amount,setAmount]=useState(amountInit)

    const requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${Cookies.get("token")}`
        }
    }

   useEffect(()=>{
       nextPrice()
   },[])

    const buyGenerator=()=> {
        fetch("http://server.bykovski.de:8000/generators/" + id + "/buy", requestOptions)
            .then(response =>response.json())
            .then(data=>{nextPrice()
            if(data.amount!==undefined) changeAmount(data.amount)})
    }

    const changeAmount=(amount)=>{
        setAmount(amount)
    }


    const nextPrice=()=>{
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${Cookies.get("token")}`
            }
        }
        fetch("http://server.bykovski.de:8000/generators/" + id + "/next-price", requestOptions)
            .then(response =>response.json())
            .then(data=>setNextPrice(data))
    }

    return(
        <Container>
            <h6>{`CPS:${income_rate} next Price:${nextPriceState} amount:${amount}`}</h6>
            <Button onClick={buyGenerator} >Buy</Button>
        </Container>
    )
}

export default GeneratorComponent