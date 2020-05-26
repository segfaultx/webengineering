import React, {useContext, useEffect, useState} from "react"
import "../mainpagecomponent/mainPageHeaderStyle.css"
import {ClickContext} from "../mainpagecomponent/clickContext"
import {Container, Row} from "react-bootstrap"
import Config from "../../../config"
import Cookies from "js-cookie"


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
                <h2>Blood:{clicks}</h2>
            </Row>
        </Container>
    )
}

export default ShowPointsComponent