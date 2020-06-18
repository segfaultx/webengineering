import React, {useContext} from "react"
import {useEffect, useState} from "react"
import Cookies from "js-cookie"
import Config from "../../../config"
import {motion} from "framer-motion"

import RedCircle from "../../media/images/clickercomp/aua-circle.png"
import './clickerComponentStyle.css'
import damage from "../../media/audio/damage.mp3"
import monster from"../../media/images/monster/Megapack III Undead Warrior Benkei.png"
import {VolumeContext} from "../../../contexts/volumeContext"

const Clickercomponent = ({initialCounterValue = 0}) => {
    const [ws, setWs] = useState(null)
    const [counter, setCounter] = useState(initialCounterValue)
    const {volume, setVolume} = useContext(VolumeContext)
    const [showDmg, setShowDmg] = useState(false)

    useEffect(() => {
        let initWs = new WebSocket(`${Config.websocketUrl}/game/click?token=${Cookies.get("token")}`)
        initWs.onmessage = handleUpdate
        setWs(initWs)
        return () => initWs.close()
    }, [])


    function handleUpdate(message){
        setCounter(counter + JSON.parse(message.data)["points"])
    }

    function handleClick() {
        if (ws !== null) {
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
        if(volume){
            click.volume = 0.1
        } else {
            click.volume = 0
        }
        click.play()
    }

    const variants = {
        visible: {y: -10, opacity: 1 },
        hidden: { y: 0, opacity: 0 },
    }

    return(
            <div className={"monsterDiv"}>
                <motion.div
                    className='damagePoints'
                    animate= {showDmg ? 'visible' : 'hidden'}
                    variants={variants}
                >
                    +{counter}
                </motion.div>
                <img className={"redCircle"} style={{visibility: showDmg? "visible":"hidden"}} src={RedCircle}/>
                <img className={"monster"} src={monster} style={{zIndex:2}} onMouseDown={start} onClick={handleClick}/>
            </div>
    )

}

export default Clickercomponent