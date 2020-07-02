import React, {useContext} from "react"
import "../../../pages/mainpage/mainpagecomponentstyle.css"
import {Image, Popover, OverlayTrigger} from "react-bootstrap"
import {motion} from "framer-motion"
import {VolumeContext} from "../../../contexts/volumeContext"

import './upgradeStyle.css'

import d1 from '../../media/images/upgrades/upgrade-1.png'
import d2 from '../../media/images/upgrades/upgrade-2.png'
import d3 from '../../media/images/upgrades/upgrade-3.png'
import d4 from '../../media/images/upgrades/upgrade-4.png'
import d5 from '../../media/images/upgrades/upgrade-5.png'
import d6 from '../../media/images/upgrades/upgrade-6.png'
import d7 from '../../media/images/upgrades/upgrade-7.png'
import d8 from '../../media/images/upgrades/upgrade-8.png'
import upgradeBrowse from "../../media/audio/browsingUpgrades.mp3"
import notEnough from "../../media/audio/noEffectClick.mp3"

const upgradeImages = [
    {id: 1, src: d1, title: "Dainsleif", description: 'A common steel sword, used by many heroes'},
    {id: 2, src: d2, title: "Mistilteinn", description: 'A magic sword that never goes blunt'},
    {id: 3, src: d3, title: "Mjolnir", description: 'The mightiest of war hammers. A weapon of legends'},
    {
        id: 4,
        src: d4,
        title: "Forseiti's Axe",
        description: 'An ancient battle axe, used to protect the bearer of any harm'
    },
    {id: 5, src: d5, title: "Molag Bal", description: 'A mace forged by evil spirits to decimate their enemies'},
    {id: 6, src: d6, title: "Skofung", description: 'A blade with supernatural sharpness and hardness'},
    {id: 7, src: d7, title: "Gram", description: 'A mighty sword granted to worthy heroes by the gods'},
    {
        id: 8,
        src: d8,
        title: "01110011 01110100 01100001 01100011 01101011 01101111 01110110 01100101 01110010 01100110" +
            " 01101100 01101111 01110111",
        description: 'A sword of unknown origins. With its magic the user might defeat any adversary'
    }
]


const UpgradeComponent = (props) => {
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

    const upgImg = upgradeImages.find(img => img.id === props.order)
    const popover = (
        <Popover id={'popover-basic'} className='upgradeOverlay'>
            <Popover.Title> {upgImg.title} </Popover.Title>
            <Popover.Content>
                {upgImg.description}
                <hr/>
                Multiplier: x{props.multiplier}
                <br/>
                Cost: {props.cost}
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
                           filter: props.boughtStatus ? 'opacity(50%)' : 'none'
                       }}
                       src={upgImg.src}
                       alt={upgImg.title}
                       onClick={() => !props.boughtStatus ? props.buyUpgrade(props.id) : start(clicked) }
                       onMouseEnter={() => start(audioBrowse)}
                />
            </motion.div>
        </OverlayTrigger>
    )
}

export default UpgradeComponent