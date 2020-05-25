import React, {useContext, useEffect, useState} from "react";
import {CPSContext} from "../mainpagecomponent/cpsContext";
import {Button, Container, Row} from "react-bootstrap";
import Config from "../../../config";
import Cookies from "js-cookie";


const ShowCPSComponent=()=>{

    const {cps,setCPS}= useContext(CPSContext)
    const [ws, setWs] = useState(null)

    useEffect(() => {
        let initWs = new WebSocket(`${Config.websocketUrl}/game/generators?token=${Cookies.get("token")}`)
        setWs(initWs)
        initWs.onopen=()=>{console.log("openPointws")}
        initWs.onmessage = handleUpdate
    }, [])

    function handleUpdate(message){
        console.log(message)
        setCPS( JSON.parse(message.data)["points"])
    }


    return(
        <Container>
            <Row className={"showCPS"}>
                <h2>CPS:{cps}</h2>
            </Row>
        </Container>
    )
}

export default ShowCPSComponent