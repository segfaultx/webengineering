import React,{useState} from "react";
import "../mainpagecomponent/mainpagecomponentstyle.css"
import Cookies from 'js-cookie'


const UpgradeComponent = (props) => {
    const [userToken, setUserToken] = useState(Cookies.get('token'))
    const [error, setError] = useState('');
    const [upgradeBought, setUpgradeBought] = useState(false)

    const config = {
        method : 'GET',
        headers: { Authorization: `Bearer ${userToken}` }
    };

    const handleBuy = () => {
        fetch(`http://server.bykovski.de:8000/upgrades/${props.id}/buy`,config)
            .then(response => {
                if(response.status === 200){
                    setUpgradeBought(true)
                }else{
                    response.json()
                        .then(detail => setError(detail))
                    console.log(error)
                }
            })
            .catch(err => {
                setError(err.detail)
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