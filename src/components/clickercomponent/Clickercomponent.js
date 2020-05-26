import React from "react"
import {useEffect, useState} from "react"
import Cookies from "js-cookie"
import Config from "../../config"

const Clickercomponent = ({initialCounterValue = 0}) => {
    const [ws, setWs] = useState(null)
    const [counter, setCounter] = useState(initialCounterValue)
    useEffect(() => {
        let initWs = new WebSocket(`${Config.websocketUrl}/game/click?token=${Cookies.get("token")}`)
        initWs.onmessage = handleUpdate
        setWs(initWs)
        return () => initWs.close()
    }, [])

    function handleUpdate(message){
        console.log(message)
        setCounter(counter + JSON.parse(message.data)["points"])
    }

    function handleClick() {
        if (ws !== null) {
            //console.log("click send")
            ws.send(`token=${Cookies.get("token")}`)
        }

    }

    return <div>

        <button onClick={handleClick}>Click me! Counter: {counter}</button>
    </div>
}

export default Clickercomponent