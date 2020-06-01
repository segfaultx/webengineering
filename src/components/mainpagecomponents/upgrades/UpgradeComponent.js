import React,{useState} from "react"
import "../mainpagecomponent/mainpagecomponentstyle.css"


const UpgradeComponent = (props) => {
    return(
        <div>
            <button
                onClick = { () => props.buyUpgrade(props.id) }
                disabled = {props.boughtStatus}
            >
                    Cost: {props.cost} Blood
                    <br/>
                    Multiplier: x{props.multiplier}
            </button>
        </div>
    )
}

export default UpgradeComponent