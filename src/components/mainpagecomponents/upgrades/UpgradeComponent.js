import React, {useContext} from "react"
import "../../../pages/mainpage/mainpagecomponentstyle.css"
import {Image, Popover, OverlayTrigger} from "react-bootstrap"
import {motion} from "framer-motion"
import {VolumeContext} from "../../../contexts/volumeContext"

import upgradeBrowse from "../../media/audio/browsingUpgrades.mp3"
import notEnough from "../../media/audio/noEffectClick.mp3"
import upgradeImages from "./UpgradeConfig";

import './upgradeStyle.css'

/**
 * Component that renders an upgrade as an image with a popover overlay
 *
 * @param key is id
 * @param id differentiate between all upgrades
 * @param multiplier shows the multiplication factor to be applied onto the clicks
 * @param cost shows how much the upgrade costs
 * @param order the order in which the upgrades will be rendered in their parent list
 * @param buyUpgrade function that buys the upgrade onClick
 * @param boughtStatus bool which shows if the upgrade is buyable (enough cost? Already bought?)
 * @returns {*}
 * @constructor
 */
const UpgradeComponent = ({key, id, multiplier, cost, order, buyUpgrade, boughtStatus}) => {
    const {volume} = useContext(VolumeContext)

    let audioBrowse = new Audio(upgradeBrowse)
    audioBrowse.preload = 'auto'
    audioBrowse.load()
    audioBrowse.volume = 0.5

    let clicked = new Audio(notEnough)
    audioBrowse.preload = 'auto'
    audioBrowse.load()
    audioBrowse.volume = 0.5

    const start = (sound) => {
        let click = sound.cloneNode()
        if(volume) click.play()
    }

    const upgImg = upgradeImages.find(img => img.id === order)
    const popover = (
        <Popover id={'popover-basic'} className='upgradeOverlay'>
            <Popover.Title> {upgImg.title} </Popover.Title>
            <Popover.Content>
                {upgImg.description}
                <hr/>
                Multiplier: x{multiplier}
                <br/>
                Cost: {cost}
            </Popover.Content>
        </Popover>
    )
    return (
        <OverlayTrigger
            placement='left'
            overlay={popover}>
            <motion.div
                whileHover={{ scale: 1.1}}
                whileTap={{ scale: 0.9}}>
                <Image className='upgradeImage'
                       style={{
                           filter: boughtStatus ? 'opacity(50%)' : 'none'
                       }}
                       src={upgImg.src}
                       alt={upgImg.title}
                       data-testid = {`${id}_buyImg`}
                       onClick={() => !boughtStatus ? buyUpgrade(id) : start(clicked) }
                       onMouseEnter={() => start(audioBrowse)}
                />
            </motion.div>
        </OverlayTrigger>
    )
}

export default UpgradeComponent