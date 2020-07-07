import React, {useContext} from "react"
import {useEffect, useState} from "react"
import Cookies from "js-cookie"
import Config from "../../../config"
import {motion} from "framer-motion"

import './clickerComponentStyle.css'
import damage from "../../media/audio/damage.mp3"
import {VolumeContext} from "../../../contexts/volumeContext"
import {LevelUpContext} from "../../../contexts/levelUpContext"
import {BoughtUpgradeContext} from "../../../contexts/boughtUpgradesContext"

/**
 * Shows a clickable monster image. Clicking adds a static amount of "bloodpoints" to user balance. Plays a sound
 * when clicked and filters the image in a red color
 * @param initialCounterValue
 * @returns {*}
 * @constructor
 */
const Clickercomponent = ({initialCounterValue = 0}) => {
    const [ws, setWs] = useState(null)
    const [counter, setCounter] = useState(initialCounterValue)
    const {volume} = useContext(VolumeContext)
    const [showDmg, setShowDmg] = useState(false)
    const {boughtUpgrades}=useContext(BoughtUpgradeContext)
    const {monsterImage}=useContext(LevelUpContext)

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
        if (volume) {
            let click = audio.cloneNode()
            click.volume = 0.25
            click.play()
        }
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
                    <img className={"monster"}
                         src={monsterImage.monsterImages[boughtUpgrades.length]}
                         alt = "Click Me"
                         style={{zIndex:2}}
                         onMouseDown={start}
                         onClick={handleClick}
                    />
                </div>
    )

}

export default Clickercomponent