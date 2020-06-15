import React, {useContext, useEffect} from "react";
import {Container} from "react-bootstrap";
import skelleton from "../../media/images/skeletonFront.png";
import skelletonB from "../../media/images/skeletonBackSprites.png";
import elve from "../../media/images/elvesSprites.png";
import elveB from "../../media/images/elvesBackSprite.png";
import assassin from "../../media/images/assassinFrontSprite.png";
import assassinB from "../../media/images/assassinBackSprite.png";
import fighter from "../../media/images/FighterFrontSprite.png";
import fighterB from "../../media/images/FighterBackSprite.png";
import orkBow from "../../media/images/orkBowFrontSprite.png";
import orkBowB from "../../media/images/orkBowBackSprite.png";
import redhat from "../../media/images/redhatFrontSprite.png";
import redhatB from "../../media/images/redhatBackSprite.png";
import skelletonKing from "../../media/images/SkelletonFrontKing.png";
import skelletonKingB from "../../media/images/SkelletonKingBack.png";
import undertaker from "../../media/images/undertakerFrontSprite.png";
import undertakerB from "../../media/images/undertakerBackSprite.png";
import lizard from "../../media/images/LizardFrontSprite.png";
import lizardB from "../../media/images/LizardBackSprite.png";
import {GenerateArmyContext} from "../../../contexts/generateArmyContext";
import {ArmyAmountContext} from "../../../contexts/armyAmountContext";

const ArmyArea=()=>{

    const generatorImages = [
        {id: 0, srcF: skelleton,srcB:skelletonB, title: "Skeleton"},
        {id: 1, srcF: elve,srcB:elveB, title: "Elve"},
        {id: 2, srcF: assassin,srcB:assassinB, title: "Assassin"},
        {id: 3, srcF: fighter,srcB:fighterB, title: "Monk"},
        {id: 4, srcF: orkBow,srcB:orkBowB, title: "Bork"},
        {id: 5, srcF: redhat,srcB:redhatB, title: "Valkyrie"},
        {id: 6, srcF: skelletonKing,srcB:skelletonKingB, title: "Diablo"},
        {id: 7, srcF: undertaker,srcB:undertakerB, title: "Skelleton King"},
        {id: 8, srcF: lizard,srcB:lizardB, title: "Undertaker" },
        {id: 9, srcF: skelleton,srcB:skelletonB, title: "Skeleton"},
        {id: 10, srcF: skelleton,srcB:skelletonB, title: "Skeleton"},
        {id: 11, srcF: skelleton,srcB:skelletonB, title: "Skeleton"},
        {id: 12, srcF: skelleton,srcB:skelletonB, title: "Skeleton"},
        {id: 13, srcF: skelleton,srcB:skelletonB, title: "Skeleton"}
    ]

    /*<img alt="none" key={Math.random()} style={{position:"absolute",
                bottom:30+Math.random()*30,
                left:-20+Math.random()*1000}}
                 src={sprite}/>*/
    const {army,setArmy}= useContext(GenerateArmyContext)
    const {armyAmount}=useContext(ArmyAmountContext)
    return(
        <Container>
            {army}
            {console.log(armyAmount)}
        </Container>
    )
}

export default ArmyArea