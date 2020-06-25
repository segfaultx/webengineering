import React, {useContext, useEffect, useState} from "react"
import "../generators/generatorListStyle.css"
import {Col, Container} from "react-bootstrap"
import GeneratorComponent from "./GeneratorComponent"
import Cookies from "js-cookie"
import {CPSContext} from "../../../contexts/cpsContext"
import {GenerateArmyContext} from "../../../contexts/generateArmyContext";
import {ArmyAmountContext} from "../../../contexts/armyAmountContext";
import generatorImages from "./generatorConfig";
import {ClickContext} from "../../../contexts/clickContext";

const GeneratorListComponent =()=>{



    const {cps}= useContext(CPSContext)
    const {clicks} = useContext(ClickContext)
    const [generators,setGenerators]=useState([])
    const {army,setArmy}= useContext(GenerateArmyContext)
    const {armyAmount,setArmyAmount}=useContext(ArmyAmountContext)


    useEffect(()=> {
        fetchData().catch(console.error);
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
        let tempArmy={}

        for(const generator of generatorsJson.sort((a,b)=>a.order-b.order)){
            generator.price=await nextPrice(generator.id)
            const amount=amountJson.find((amount)=>amount.generator.id===generator.id)
            if(amount){
                generator.amount=amount.amount
            }
             else{
            generator.amount=0
            }
             tempArmy[generator.id]=generator.amount
        }
        setArmyAmount(tempArmy)
        setGenerators(generatorsJson)
    }

    const onBuy=async (buyId)=>{
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${Cookies.get("token")}`
            }
        }
        const buyResponse= await fetch("http://server.bykovski.de:8000/generators/" + buyId + "/buy", requestOptions)
        let response=await buyResponse.json();
        if (response.ok){
            setArmyAmount({...armyAmount,[response.generator.id]:response.amount})
        }

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
                    {generators.sort((a,b)=>a.order-b.order).map((generator)=><GeneratorComponent
                                                                                    key = {generator.id}
                                                                                    buyId={generator.id}
                                                                                    image={generatorImages[generator.id]}
                                                                                    income_rate={generator.income_rate}
                                                                                    amount={generator.amount}
                                                                                    price={generator.price}
                                                                                    buyable = {clicks - generator.price >= 0}
                                                                                    onBuy={onBuy}/>)}
                </Col>
            </Container>
        </Container>
    )
}

export default GeneratorListComponent