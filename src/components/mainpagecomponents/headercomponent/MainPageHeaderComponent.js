import React, {useContext} from "react"
import ShowPointsComponent from "../showpointscomponent/ShowPointsComponent"
import ShowCPSComponent from "../showCPScomponent/ShowCPSComponent"
import {Button, Container, Navbar, Popover, OverlayTrigger, Tooltip} from "react-bootstrap"
import "./mainPageHeaderStyle.css"
import Cookies from "js-cookie";
import {useHistory} from "react-router-dom";
import {VolumeContext} from "../../../contexts/volumeContext"

import volumeOn from '../../media/images/navbar/volumeOn.png'
import volumeOff from '../../media/images/navbar/volume_off.png'
import helpIcon from '../../media/images/navbar/question-mark.png'
import changeChar from '../../media/images/navbar/changeChar.png'

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
               placement='bottom'
               overlay={
                   <Tooltip id='change Character'> Back to character selection </Tooltip>
               }>
               <img
                   className="characterSelection"
                   src={changeChar}
                   alt="Change Character"
                   width="27vw"
                   height="27vh"
               />
           </OverlayTrigger>
           <OverlayTrigger
               placement = 'left'
               overlay = {popover} >
               <img
                   className="howToPlay"
                   src={helpIcon}
                   alt="Help"
                   width="25vw"
                   height="25vh"
               />
           </OverlayTrigger>
           <OverlayTrigger
               placement='bottom'
               overlay={
                   <Tooltip id='change Character'> {volume ? 'Turn off volume' : 'Turn on volume'} </Tooltip>
               }>
               <img
                   className="volumeControl"
                   src={volume ? volumeOn : volumeOff}
                   alt={volume ? "Volume on" : "Volume off"}
                   width="40vw"
                   height="40vh"
                   onClick={() => {setVolume(!volume)}}
               />
           </OverlayTrigger>
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