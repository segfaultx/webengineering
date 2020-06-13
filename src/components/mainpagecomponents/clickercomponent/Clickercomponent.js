import React from "react"
import {useEffect, useRef, useState} from "react"
import Cookies from "js-cookie"
import Config from "../../../config"
import {motion} from "framer-motion";

import './clickerComponentStyle.css'
import damage from "../../media/audio/damage.mp3";

const Clickercomponent = ({initialCounterValue = 0}) => {
    const [ws, setWs] = useState(null)
    const [counter, setCounter] = useState(initialCounterValue)
    const target = useRef(null);
    const [showDmg, setShowDmg] = useState(false)

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
            setShowDmg(true)
            setTimeout(setShowDmg, 300)
        }
    }

    let audio = new Audio(damage)
    audio.preload = 'auto'
    audio.load()

    const start = () => {
        let click = audio.cloneNode()
        click.volume = 0.1
        click.play()
    }

    const variants = {
        visible: {y: -10, opacity: 1 },
        hidden: { y: 0, opacity: 0 },
    }

    return(
        <div>
            <motion.div
                className='damagePoints'
                animate= {showDmg ? 'visible' : 'hidden'}
                variants={variants}
            >
                +{counter}
            </motion.div>
            <button onMouseDown={start} onClick={handleClick}>Click me!</button>
        </div>
    )

}

export default Clickercomponent