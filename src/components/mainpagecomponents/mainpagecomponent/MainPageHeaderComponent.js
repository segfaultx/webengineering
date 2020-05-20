import React from "react";
import ShowPointsComponent from "../showpointscomponent/ShowPointsComponent";
import ShowCPSComponent from "../showCPScomponent/ShowCPSComponent";
import {Container, Row} from "react-bootstrap";
import "./mainPageHeaderStyle.css"


const MainPageHeader=()=> {

    /*return(
        <div>
            <div style={{background:"black", opacity:0.5}}>
                <h1 style={{opacity:0.5}}>ClickerGame</h1>
            </div>
            <div>
                <ShowPointsComponent/>
                <ShowCPSComponent/>
            </div>
        </div>
    )*/

    return (

       <div className="headercontainer">
           <ShowPointsComponent className="showPoints"/>
           <ShowCPSComponent className="showCPS"/>
       </div>
    )
}

export default MainPageHeader