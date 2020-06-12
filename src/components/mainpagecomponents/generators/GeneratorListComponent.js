import React, {useContext, useEffect, useState} from "react"
import "../generators/generatorListStyle.css"
import {Col, Container} from "react-bootstrap"
import GeneratorComponent from "./GeneratorComponent"
import Cookies from "js-cookie"
import {CPSContext} from "../mainpagecomponent/cpsContext"

const GeneratorListComponent =()=>{

    const {cps}= useContext(CPSContext)
    const [generators,setGenerators]=useState([])

    useEffect(()=> {
        fetchData().catch(console.error)
    },[])

    useEffect(()=>{
        fetchData().catch(console.error)
    },[cps])

    async function fetchData() {

        const requestOptions={
            method:'GET',
            headers:{
                'Authorization':`Bearer ${Cookies.get("token")}`}}

        const generatorsResponse =  await fetch("http://server.bykovski.de:8000/generators/available",requestOptions)
        const generatorsJson= await generatorsResponse.json()
        const amountResponse = await fetch("http://server.bykovski.de:8000/generators/current-user",requestOptions)
        const amountJson=await amountResponse.json()

        for(const generator of generatorsJson){
            generator.price=await nextPrice(generator.id)

            const amount=amountJson.find((amount)=>amount.generator.id===generator.id)
            if( amount){
                generator.amount=amount.amount
            }
             else{
            generator.amount=0
            }
        }
        setGenerators(generatorsJson)
    }
    const onBuy=async (id)=>{
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${Cookies.get("token")}`
            }
        }
        const buyResponse= await fetch("http://server.bykovski.de:8000/generators/" + id + "/buy", requestOptions)
        await buyResponse.json();
        await fetchData()

    }
    const nextPrice=async (id)=>{
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${Cookies.get("token")}`
            }
        }
        const price =await fetch("http://server.bykovski.de:8000/generators/" + id + "/next-price", requestOptions)
        return await price.json()

    }
    return(
        <Container>
            <h2 style={{color:"white"}}>Army</h2>
            <Container className="generatorList">

                <Col>
                    <br/>
                    {generators.sort((a,b)=>a.id-b.id).map(generator=><GeneratorComponent
                                                                                    key = {generator.id}
                                                                                    id={generator.id}
                                                                                    income_rate={generator.income_rate}
                                                                                    amount={generator.amount}
                                                                                    price={generator.price}
                                                                                    onBuy={onBuy}/>)}
                </Col>
            </Container>
        </Container>
    )
}

export default GeneratorListComponent