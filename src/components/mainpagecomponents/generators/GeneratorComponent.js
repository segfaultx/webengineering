import React, {useEffect, useState} from "react"
import {Button} from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Cookies from "js-cookie"

const GeneratorComponent =({id,income_rate,order})=>{

    const[nextPriceState,setNextPrice]=useState(0)

   useEffect(()=>{
       nextPrice()
   })

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

            <h4>{`CPS:${income_rate} next Price:${nextPriceState}`}</h4>
            <Button onClick={()=>{buyGenerator();nextPrice()}}>Buy</Button>
        </Container>
    )
}

export default GeneratorComponent