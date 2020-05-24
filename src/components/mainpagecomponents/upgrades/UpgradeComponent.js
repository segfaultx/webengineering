import React,{useState} from "react";
import axios from 'axios'
import "../mainpagecomponent/mainpagecomponentstyle.css"
import {Col, Container} from "react-bootstrap";

const UpgradeComponent = (props) => {
    const [userToken, setUserToken] = useState('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJieWtvZiIsImV4cCI6MTU5MDM5ODAyNX0.gJMVyD8ZdBU03bIuuRIvLsF2NcEPoXPEp_3TJPOdqzU')
    const [error, setError] = useState('');
    const [upgradeBought, setUpgradeBought] = useState(false)

    const config = {
        headers: { Authorization: `Bearer ${userToken}` }
    };

    const handleBuy = () => {
        axios.get(`http://server.bykovski.de:8000/upgrades/${props.id}/buy`,config)
            .then(response => {
                if(response.status === 200){
                    setUpgradeBought(true)
                }
            })
            .catch(response => {
                setError(response.response.data.detail)
                console.log(error)
            })
    }

    return(
        <div>
            <button
                onClick={handleBuy}
                disabled={upgradeBought}>
                    Cost: {props.cost} Blood
                    <br/>
                    Multiplier: x{props.multiplier}
            </button>
        </div>
    )
}

export default UpgradeComponent