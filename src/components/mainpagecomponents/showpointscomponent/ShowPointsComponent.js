import React, {useContext, useEffect, useState} from "react"
import "../headercomponent/mainPageHeaderStyle.css"
import {ClickContext} from "../../../contexts/clickContext"
import {Container, Row} from "react-bootstrap"
import Config from "../../../config"
import Cookies from "js-cookie"

import blood from '../../media/images/Blood_drop.png'

const ShowPointsComponent=()=>{
    const {clicks,setClicks}=useContext(ClickContext)
    const [ws, setWs] = useState(null)

    useEffect(() => {
        let initWs = new WebSocket(`${Config.websocketUrl}/game/balance?token=${Cookies.get("token")}`)
        setWs(initWs)
        initWs.onmessage = handleUpdate
        return () => initWs.close()
    }, [])

    function handleUpdate(message){
        setClicks( JSON.parse(message.data)["points"])
    }



    return(
        <Container>
            <Row className={"showPoints"}>
                <img src={blood}  alt="Blood: " width="2.5%" height = "2.5%" style={{padding: "3px"}} />
                <h2>{clicks}</h2>
            </Row>
        </Container>
    )
}

export default ShowPointsComponent