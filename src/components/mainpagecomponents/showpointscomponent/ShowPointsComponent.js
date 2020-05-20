import React from "react";
import "../mainpagecomponent/mainPageHeaderStyle.css"

const ShowPointsComponent=(value)=>{
    return(
        <div className={"showPoints"}>
            <h2>Blood:{value.blood}</h2>
        </div>
    )
}

export default ShowPointsComponent