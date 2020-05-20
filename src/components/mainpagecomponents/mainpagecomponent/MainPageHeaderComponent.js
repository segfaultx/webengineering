import React from "react";
import ShowPointsComponent from "../showpointscomponent/ShowPointsComponent";
import ShowCPSComponent from "../showCPScomponent/ShowCPSComponent";
import {Col, Container} from "react-bootstrap";
import "./mainPageHeaderStyle.css"


const MainPageHeader=(value)=> {
    return (

       <Container className="headercontainer">
           <Col>
               <ShowPointsComponent className="showPoints" blood={value.blood}></ShowPointsComponent>
           </Col>
           <Col>
               <ShowCPSComponent className="showCPS"/>
           </Col>
       </Container>
    )
}

export default MainPageHeader