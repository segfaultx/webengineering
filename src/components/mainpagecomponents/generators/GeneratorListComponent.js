import React, {useContext, useEffect, useState} from "react"
import "../generators/generatorListStyle.css"
import {Col, Container} from "react-bootstrap"
import GeneratorComponent from "./GeneratorComponent"
import Cookies from "js-cookie"
import {CPSContext} from "../../../contexts/cpsContext"
import skelleton from "../../media/images/skeletonFront.png"
import elve from "../../media/images/elvesSprites.png"
import assassin from "../../media/images/assassinFrontSprite.png"
import fighter from "../../media/images/FighterFrontSprite.png"
import orkBow from "../../media/images/orkBowFrontSprite.png"
import redhat from "../../media/images/redhatFrontSprite.png"
import lizard from "../../media/images/LizardFrontSprite.png"
import skelletonKing from "../../media/images/SkelletonFrontKing.png"
import undertaker from "../../media/images/undertakerFrontSprite.png"
import {GenerateArmyContext} from "../../../contexts/generateArmyContext";

const GeneratorListComponent =()=>{

    const generatorImages = [
        {id: 0, src: skelleton, title: "Skeleton"},
        {id: 1, src: elve, title: "Elve"},
        {id: 2, src: assassin, title: "Assassin"},
        {id: 3, src: fighter, title: "Monk"},
        {id: 4, src: orkBow, title: "Bork"},
        {id: 5, src: redhat, title: "Valkyrie"},
        {id: 6, src: skelletonKing, title: "Diablo"},
        {id: 7, src: undertaker, title: "Skelleton King"},
        {id: 8, src: lizard, title: "Undertaker" }
    ]

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

    const {army,setArmy}= useContext(GenerateArmyContext)

    const onBuy=async (buyId,spriteId)=>{
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${Cookies.get("token")}`
            }
        }
        const buyResponse= await fetch("http://server.bykovski.de:8000/generators/" + buyId + "/buy", requestOptions)
        await buyResponse.json();
        await fetchData()

        let sprite=undefined
        for (let element of generatorImages){
            console.log(typeof element.id,typeof spriteId)
            if (element.id===spriteId){
                sprite=element.src
            }
        }


        setArmy(army=>[...army,
            <img style={{position:"absolute",
                        bottom:30+Math.random()*30,
                        left:-20+Math.random()*1000}}
                 src={sprite}/>])
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

    /*
    for testing: render all sprites
    function showGen() {
        for(let generator of generators){
            for(let i=0;i<generator.amount;i++){
                console.log(i)
            }
        }
    }*/
    return(
        <Container>
            <h2 style={{color:"white"}}>Army</h2>
            <Container className="generatorList">
                <Col>
                    <br/>
                    {generators.sort((a,b)=>a.income_rate-b.income_rate).map((generator,index)=><GeneratorComponent
                                                                                    key = {generator.id}
                                                                                    buyId={generator.id}
                                                                                    spriteId={index}
                                                                                    image={generatorImages[index]}
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