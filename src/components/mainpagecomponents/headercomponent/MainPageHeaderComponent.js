import React, {useContext, useState} from "react"
import ShowPointsComponent from "../showpointscomponent/ShowPointsComponent"
import ShowCPSComponent from "../showCPScomponent/ShowCPSComponent"
import {Button, Col, Container, Navbar} from "react-bootstrap"
import "./mainPageHeaderStyle.css"
import Cookies from "js-cookie";
import {useHistory} from "react-router-dom";
import {VolumeContext} from "../../../contexts/volumeContext"

import volumeOn from '../../media/images/volumeOn.png'
import volumeOff from '../../media/images/volume_off.png'

const MainPageHeader=()=> {
    const {volume, setVolume} = useContext(VolumeContext)
    const history = useHistory()

    function logout() {
        Cookies.remove("token")
        history.push("/login")
    }

    return (

       <Navbar sticky='top' className="headercontainer">
           <h2 className="gamename">{Cookies.get('username')}</h2>
           <Container className="gameInfo">
               <ShowPointsComponent className="showPoints"/>
               <ShowCPSComponent className="showCPS"/>
           </Container>
           <img
               className="volumeControl"
               src={volume ? volumeOn : volumeOff}
               alt={volume ? "Volume on" : "Volume off"}
               width="2%"
               height="2%"
               onClick={() => {setVolume(!volume)}}
           />
           <Button className="logoutBtn" size="lg" variant='danger' onClick={logout}>Logout</Button>
       </Navbar>
    )
}

export default MainPageHeader