import React, {useState} from "react";
import "./mainpagecomponentstyle.css"
import dImg1 from "../../media/images/login_background_screen.jpg"
import dImg2 from "../../media/images/UHpNxb.jpg"
import dImg3 from "../../media/images/kJVa6H.jpg"
import dImg4 from "../../media/images/kZPyQB.jpg"
import dImg5 from "../../media/images/binary-numbers-tunnel.jpg"
//import ShowPointsComponent from "../showpointscomponent/ShowPointsComponent";
//import ShowCPSComponent from "../showCPScomponent/ShowCPSComponent";
import MainPageHeader from "./MainPageHeaderComponent";
import GeneratorListComponent from "../generators/GeneratorListComponent";
import UpgradeListComponent from "../upgrades/UpgradeListComponent";

const MainPageComponent=()=>{

    const[backgroundImage,setBackgroundImage]=useState({
        "backgroundImages":[dImg1,dImg2,dImg3,dImg4,dImg5],
        "currentBackground":dImg1,
        "backgroundCounter":0})

    function handleChange() {
        backgroundImage.backgroundCounter<backgroundImage.backgroundImages.length-1
            ?
            setBackgroundImage({...backgroundImage,
                backgroundCounter: backgroundImage.backgroundCounter+=1,
                currentBackground: backgroundImage.backgroundImages[backgroundImage.backgroundCounter]})
            :
            setBackgroundImage({...backgroundImage,
                backgroundCounter: backgroundImage.backgroundCounter=0,
                currentBackground: backgroundImage.backgroundImages[backgroundImage.backgroundCounter]})

        console.log(backgroundImage.currentBackground)
    }

    let background={
        width:"100vw",
        height:"100vh",
        backgroundImage:`url(${backgroundImage.currentBackground})`,
        backgroundSize:"cover"
    }

    return(
        /*<div style={styles}>
            <div className={"mainPage"} style={background}>
                <MainPageHeader/>
                <h2 className={"mainPage"}>Mainpage</h2>
                <button onClick={(changeEvent)=>{handleChange()}}>change Background</button>
            </div>
        </div>*/
        <div style={background}>
            <div className="maincontainer">
                <h2 className="gamename" style={{color:"white"}}>ClickerGame</h2>
                <MainPageHeader/>
            </div>
            <div className="playarea">
                <GeneratorListComponent className="playareaComponents"/>
                <div className={"mainPage"}>
                    <h2>Mainpage</h2>
                    <button className={"changeBackground"} onClick={(changeEvent)=>{handleChange()}}>change Background</button>
                </div>
                <UpgradeListComponent className="playareaComponents"/>
            </div>
        </div>
)
}

export default MainPageComponent