import React, {useState} from "react"
import ShowPointsComponent from "../showpointscomponent/ShowPointsComponent"
import ShowCPSComponent from "../showCPScomponent/ShowCPSComponent"
import {Button, Col, Container, Navbar} from "react-bootstrap"
import "./mainPageHeaderStyle.css"
import Cookies from "js-cookie";
import {useHistory} from "react-router-dom";

import BackgroundImage from '../../media/images/rechteckPNG-removebg-preview.png'
import Trapez from '../../media/images/trapezPNG-removebg-preview.png'

const MainPageHeader=()=> {
    const history = useHistory()

    function logout() {
        Cookies.remove("token")
        history.push("/login")
    }

    return (

       <Navbar sticky='top' style={{backgroundImage: `url(${BackgroundImage})`}} className="headercontainer">
           <h2 className="gamename">{Cookies.get('username')}</h2>
           <div className='gameInfo'>
               <ShowPointsComponent className="showPoints"/>
               <ShowCPSComponent className="showCPS"/>
           </div>
           <Button variant='danger' onClick={logout}>Logout</Button>
       </Navbar>
    )
}

export default MainPageHeader