import React, {useContext, useState} from "react"
import ShowPointsComponent from "../showpointscomponent/ShowPointsComponent"
import ShowCPSComponent from "../showCPScomponent/ShowCPSComponent"
import {Button, Col, Container, Navbar, Popover, OverlayTrigger} from "react-bootstrap"
import "./mainPageHeaderStyle.css"
import Cookies from "js-cookie";
import {useHistory} from "react-router-dom";
import {VolumeContext} from "../../../contexts/volumeContext"

import volumeOn from '../../media/images/volumeOn.png'
import volumeOff from '../../media/images/volume_off.png'
import helpIcon from '../../media/images/question-mark.png'

const MainPageHeader=()=> {
    const {volume, setVolume} = useContext(VolumeContext)
    const history = useHistory()

    function logout() {
        Cookies.remove("token")
        history.push("/login")
    }

    const popover = (
        <Popover id={'popover-basic'} className = 'upgradeOverlay'>
            <Popover.Title> How to play </Popover.Title>
            <Popover.Content>
                Click on the monster to deal Damage.
                Buy companions who help you fight. Each companion deals
                a certain amount of damage per second.
                Buy new weapons to power up your strikes!
            </Popover.Content>
        </Popover>
    )

    return (

       <Navbar sticky='top' className="headercontainer">
           <h2 className="gamename">{Cookies.get('username')}</h2>
           <Container className="gameInfo">
               <ShowPointsComponent className="showPoints"/>
               <ShowCPSComponent className="showCPS"/>
           </Container>
           <OverlayTrigger
               placement = 'left'
               overlay = {popover} >
               <img
                   className="howToPlay"
                   src={helpIcon}
                   alt="Help"
                   width="1.5%"
                   height="35%"
               />
           </OverlayTrigger>
           <img
               className="volumeControl"
               src={volume ? volumeOn : volumeOff}
               alt={volume ? "Volume on" : "Volume off"}
               width="2%"
               height="60%"
               onClick={() => {setVolume(!volume)}}
           />
           <Button
               className="logoutBtn"
               size="lg"
               variant='danger'
               onClick={logout}
           >
               Logout
           </Button>
       </Navbar>
    )
}

export default MainPageHeader