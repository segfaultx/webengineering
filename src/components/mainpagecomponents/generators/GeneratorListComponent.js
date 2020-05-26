import React, {useContext, useEffect, useState} from "react"
import "../mainpagecomponent/mainpagecomponentstyle.css"
import {Col, Container} from "react-bootstrap"
import GeneratorComponent from "./GeneratorComponent"
import Cookies from "js-cookie"
import {CPSContext} from "../mainpagecomponent/cpsContext"

const GeneratorListComponent =()=>{

    const {cps}= useContext(CPSContext)
    const [generators,setGenerators]=useState([])
    const [shownGenerators,setShownGenerators]=useState([])
    const [initAmount,setAmount]=useState([])

    useEffect(()=>{
        const requestOptions={
            method:'GET',
            headers:{
                'Authorization':`Bearer ${Cookies.get("token")}`}}
        fetch("http://server.bykovski.de:8000/generators/available",requestOptions)
            .then(response=>response.json())
            .then(data=>{setGenerators(data)
                /*setShownGenerators(<GeneratorComponent key = {data[0].id}
                                                       id={data[0].id}
                                                       income_rate={data[0].income_rate}
                                                       amountInit={0}/>)*/
            })
        },[])


    useEffect(()=>{
        //if (cps>0){
        fetchData().catch(console.error)
        //}
    },[cps])


    async function fetchData() {
        const requestOptions={
            method:'GET',
            headers:{
                'Authorization':`Bearer ${Cookies.get("token")}`}}

        await fetch("http://server.bykovski.de:8000/generators/available",requestOptions)
            .then(response=>response.json())
            .then(data=>{setGenerators(data)
            mapGenerators()})
        await fetch("http://server.bykovski.de:8000/generators/current-user",requestOptions)
            .then(response=>response.json())
            .then(data=>{setAmount(data)
                mapGenerators()})
    }

    const mapGenerators=()=>{
        let genArray=[]
        for(let generator of generators){
            let compInitAmount=0
            for(let amount of initAmount){
                if(amount.generator.id===generator.id){
                    compInitAmount=amount.amount
                    break
                }
            }
            genArray.push(<GeneratorComponent key = {generator.id}
                                              id={generator.id}
                                              income_rate={generator.income_rate}
                                                amountInit={compInitAmount}/>)
        }
        genArray.sort((a,b)=>a.key-b.key)
        setShownGenerators(genArray)
        }

    return(
        <Container className="generatorList">
            <Col>
                <br/>
                <h2>Generator List</h2>
                {shownGenerators}
            </Col>
        </Container>
    )
}

export default GeneratorListComponent