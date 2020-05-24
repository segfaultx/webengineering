import React from "react"
import {useEffect, useState} from "react"
import Cookies from "js-cookie"

const Clickercomponent = ({websocket}) => {
    useEffect(() => {
        websocket.onmessage = (message) => {
            console.log(message)
        }
    })
    const [counter, setCounter] = useState(0)
    function handleClick () {
        websocket.send(`token=${Cookies.get("token")}`)
    }
    return <div>

        <button onClick={handleClick}>Click me! Counter: {counter}</button>
    </div>
}

export default Clickercomponent