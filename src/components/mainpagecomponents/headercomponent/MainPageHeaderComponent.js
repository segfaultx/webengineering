import React, {useState} from "react"
import ShowPointsComponent from "../showpointscomponent/ShowPointsComponent"
import ShowCPSComponent from "../showCPScomponent/ShowCPSComponent"
import {Button, Col, Container} from "react-bootstrap"
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

       <Container style={{backgroundImage: `url(${BackgroundImage})`}} className="headercontainer">
           <Col>
               <ShowPointsComponent className="showPoints"/>
           </Col>
           <Col>
               <ShowCPSComponent className="showCPS"/>
           </Col>
           <Col>
               <Button onClick={logout}>Logout</Button>
           </Col>
       </Container>
    )
}

export default MainPageHeader