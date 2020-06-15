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
import skelletonB from "../../media/images/skeletonBackSprites.png"
import elveB from "../../media/images/elvesBackSprite.png"
import assassinB from "../../media/images/assassinBackSprite.png"
import fighterB from "../../media/images/FighterBackSprite.png"
import orkBowB from "../../media/images/orkBowBackSprite.png"
import redhatB from "../../media/images/redhatBackSprite.png"
import lizardB from "../../media/images/LizardBackSprite.png"
import skelletonKingB from "../../media/images/SkelletonKingBack.png"
import undertakerB from "../../media/images/undertakerBackSprite.png"
import {GenerateArmyContext} from "../../../contexts/generateArmyContext";

const GeneratorListComponent =()=>{

    const generatorImages = [
        {id: 0, srcF: skelleton,srcB:skelletonB, title: "Skeleton"},
        {id: 1, srcF: elve,srcB:elveB, title: "Elve"},
        {id: 2, srcF: assassin,srcB:assassinB, title: "Assassin"},
        {id: 3, srcF: fighter,srcB:fighterB, title: "Monk"},
        {id: 4, srcF: orkBow,srcB:orkBowB, title: "Bork"},
        {id: 5, srcF: redhat,srcB:redhatB, title: "Valkyrie"},
        {id: 6, srcF: skelletonKing,srcB:skelletonKingB, title: "Diablo"},
        {id: 7, srcF: undertaker,srcB:undertakerB, title: "Skelleton King"},
        {id: 8, srcF: lizard,srcB:lizardB, title: "Undertaker" }
    ]

    const {cps}= useContext(CPSContext)
    const [generators,setGenerators]=useState([])
    const {setArmy}= useContext(GenerateArmyContext)
    let spriteId=0
    let isGeneratedId=false

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
        if (isGeneratedId===false){
            isGeneratedId=true
            generateSpritesOnInit(generatorsJson)
        }
        setGenerators(generatorsJson)
    }

    const onBuy=async (buyId,spriteId)=>{
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${Cookies.get("token")}`
            }
        }
        const buyResponse= await fetch("http://server.bykovski.de:8000/generators/" + buyId + "/buy", requestOptions)
        await buyResponse.json();
        if (buyResponse.ok) generateSpriteOnAction(spriteId)
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

    const generateSpritesOnInit=(generatorsJson)=>{
        for(const generator of generatorsJson.sort((a,b)=>a.income_rate-b.income_rate)){
            generator.spriteId=spriteId
            console.log(spriteId)
            for(let i=0;i<=10;i++){
                generateSpriteOnAction(spriteId)
            }
            spriteId+=1
        }
    }
    const generateSpriteOnAction=(spriteId)=>{
        let sprite=undefined
        for (let element of generatorImages){
            if (element.id===spriteId){
                sprite=element.srcB
            }
        }
        generateSprite(sprite)
    }

    const generateSprite=(sprite)=>{
        setArmy(army=>[...army,
            <img alt="none" key={Math.random()} style={{position:"absolute",
                bottom:30+Math.random()*30,
                left:-20+Math.random()*1000}}
                 src={sprite}/>])
    }


    return(
        <Container>
            <h2 style={{color:"white"}}>Army</h2>
            <Container className="generatorList">
                <Col>
                    <br/>
                    {generators.sort((a,b)=>a.order-b.order).map((generator,index)=><GeneratorComponent
                                                                                    key = {generator.id}
                                                                                    buyId={generator.id}
                                                                                    spriteId={generator.spriteId}
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