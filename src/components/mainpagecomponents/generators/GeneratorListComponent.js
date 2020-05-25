import React, {useEffect, useState} from "react"
import "../mainpagecomponent/mainpagecomponentstyle.css"
import {Col, Container} from "react-bootstrap"
import GeneratorComponent from "./GeneratorComponent"
import Cookies from "js-cookie"

const GeneratorListComponent =()=>{


    const [generators,setGenerators]=useState([])


    useEffect(()=>{
        const requestOptions={
            method:'GET',
            headers:{
                'Authorization':`Bearer ${Cookies.get("token")}`           } //bearer token von postman mit bykof 123456
        }
        fetch("http://server.bykovski.de:8000/generators/available",requestOptions)
            .then(response=>response.json())
            .then(data=>{setGenerators(data)
            })
    },[])


    const mapGenerators=()=>{
        let genArray=[]
        genArray=generators.map(generator=><GeneratorComponent key = {generator.id} id={generator.id} income_rate={generator.income_rate} order={generator.order}/>)
        genArray.sort((a,b)=>a.key-b.key)
        return genArray
    }

    return(
        <Container className="generatorList">
            <Col>
                <br/>
                <h2>Generator List</h2>
                {mapGenerators()}
            </Col>
        </Container>
    )
}

export default GeneratorListComponent