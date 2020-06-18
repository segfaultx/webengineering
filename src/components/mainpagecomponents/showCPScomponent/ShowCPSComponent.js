import React, {useContext, useEffect, useState} from "react"
import {CPSContext} from "../../../contexts/cpsContext"
import {Container, Row} from "react-bootstrap"
import Config from "../../../config"
import Cookies from "js-cookie"

import pointer from '../../media/images/swordIcon.png'

const ShowCPSComponent=()=>{

    const {cps,setCPS}= useContext(CPSContext)
    const [ws, setWs] = useState(null)

    useEffect(() => {
        let initWs = new WebSocket(`${Config.websocketUrl}/game/generators?token=${Cookies.get("token")}`)
        setWs(initWs)
        initWs.onmessage = handleUpdate
        return () => initWs.close()
    }, [])

    function handleUpdate(message){
        setCPS(JSON.parse(message.data)["points"])
    }

    return(
        <Container>
            <Row className={"showCPS"}>
                <img src={pointer} alt="CPS: " width="6%" height="6%" style={{padding: "2px"}} />
                <h2>{cps}</h2>
                <t style={{padding: "5px"}}> points per second</t>
            </Row>
        </Container>
    )
}

export default ShowCPSComponent