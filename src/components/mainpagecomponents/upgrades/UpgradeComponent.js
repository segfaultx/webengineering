import React,{useState} from "react"
import "../mainpagecomponent/mainpagecomponentstyle.css"
import {Image, Popover, OverlayTrigger} from "react-bootstrap"

import './upgradeStyle.css'

import d1 from '../../media/images/upgrade-1.png'
import d2 from '../../media/images/upgrade-2.png'
import d3 from '../../media/images/upgrade-3.png'
import d4 from '../../media/images/upgrade-4.png'
import d5 from '../../media/images/upgrade-5.png'
import d6 from '../../media/images/upgrade-6.png'
import d7 from '../../media/images/upgrade-7.png'
import d8 from '../../media/images/upgrade-8.png'


const upgradeImages = [
    {id: 1, src: d1, title: "Upgrade 1", description: 'Foo'},
    {id: 2, src: d2, title: "Upgrade 2", description: 'Foo'},
    {id: 3, src: d3, title: "Upgrade 3", description: 'Foo'},
    {id: 4, src: d4, title: "Upgrade 4", description: 'Foo'},
    {id: 5, src: d5, title: "Upgrade 5", description: 'Foo'},
    {id: 6, src: d6, title: "Upgrade 6", description: 'Foo'},
    {id: 7, src: d7, title: "Upgrade 7", description: 'Foo'},
    {id: 8, src: d8, title: "Upgrade 8", description: 'Foo'},
]


const UpgradeComponent = (props) => {
    const upgImg = upgradeImages.find(img => img.id === props.order)

    const popover = (
        <Popover id={'popover-basic'}>
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

    return(
        <OverlayTrigger
            className = 'upgradeOverlay'
            placement = 'top'
            overlay = {popover} >
            <div>
                <br/>
                <Image className='upgradeImage'
                    style={{
                        filter: props.boughtStatus ? 'opacity(50%)' : 'none'
                    }}
                    src = {upgImg.src}
                    alt = {upgImg.title}
                    onClick = { () => !props.boughtStatus ? props.buyUpgrade(props.id) : 'none' }
                />
            </div>
        </OverlayTrigger>
    )
}

export default UpgradeComponent