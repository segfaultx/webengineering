import React, {useContext, useEffect} from "react";
import "../mainpagecomponent/mainPageHeaderStyle.css"
import {ClickContext} from "../mainpagecomponent/clickContext";
import {Button, Container, Row} from "react-bootstrap";
import {CPSContext} from "../mainpagecomponent/cpsContext";

const ShowPointsComponent=()=>{




    const {clicks,setClicks}=useContext(ClickContext)
    const {cps}=useContext(CPSContext)

    useEffect(()=>{
        const interval=setInterval(()=>{
            setClicks(clicks=>clicks+cps)
        },1000)
        return () =>clearInterval(interval)
    })

    const onClick=()=>{
        setClicks(clicks+1)
    }

    //trying to call setClicks after one second too add cps on clicks
    //setInterval(setClicks(clicks+cps),1000)

    /*const addCPS=()=>{
        setClicks(clicks+cps)
    }*/



    return(
        <Container>
            <Row className={"showPoints"}>
                <h2>Blood:{clicks}</h2>
                <Button type={"button"} onClick={onClick}>Click for blood</Button>
            </Row>
        </Container>
    )
}

export default ShowPointsComponent