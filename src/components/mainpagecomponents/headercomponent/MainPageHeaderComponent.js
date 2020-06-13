import React from "react"
import ShowPointsComponent from "../showpointscomponent/ShowPointsComponent"
import ShowCPSComponent from "../showCPScomponent/ShowCPSComponent"
import {Button, Col, Container} from "react-bootstrap"
import "./mainPageHeaderStyle.css"
import Cookies from "js-cookie";
import {useHistory} from "react-router-dom";

const MainPageHeader=()=> {

    const history = useHistory()

    function logout() {
        Cookies.remove("token")
        history.push("/login")
    }

    return (

       <Container className="headercontainer">
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