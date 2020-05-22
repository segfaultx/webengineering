import React from "react";
import ShowPointsComponent from "../showpointscomponent/ShowPointsComponent";
import ShowCPSComponent from "../showCPScomponent/ShowCPSComponent";
import {Col, Container} from "react-bootstrap";
import "./mainPageHeaderStyle.css"


const MainPageHeader=()=> {
    return (

       <Container className="headercontainer">
           <Col>
               <ShowPointsComponent className="showPoints"/>
           </Col>
           <Col>
               <ShowCPSComponent className="showCPS"/>
           </Col>
       </Container>
    )
}

export default MainPageHeader