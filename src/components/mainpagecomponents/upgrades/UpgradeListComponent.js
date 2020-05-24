import React,{useState, useEffect} from "react";
import axios from 'axios'
import "../mainpagecomponent/mainpagecomponentstyle.css"
import {Col, Container} from "react-bootstrap";
import UpgradeComponent from "./UpgradeComponent";


const UpgradeListComponent =()=>{

    const [upgradeList, setUpgradeList] = useState([])
    const [userToken, setUserToken] = useState('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJieWtvZiIsImV4cCI6MTU5MDM5ODAyNX0.gJMVyD8ZdBU03bIuuRIvLsF2NcEPoXPEp_3TJPOdqzU')
    const [error, setError] = useState('');

    const config = {
        headers: { Authorization: `Bearer ${userToken}` }
    };

    useEffect(() => {
        axios.get('http://server.bykovski.de:8000/upgrades/available',config)
            .then(response => {
                if(response.status === 200){
                    setUpgradeList(response.data)
                }
            })
            .catch(err => {
                setError(err.message)
            })
    },[])

    let upgradeComponents = upgradeList.map(item => <UpgradeComponent key={item.id} id={item.id} multiplier={item.multiplier} cost={item.cost} order={item.order} />)
    return(
        <Container className="upgradeList">
            <Col >
                <br/>
                <h2>Upgrade List</h2>
                {upgradeComponents}
            </Col>
        </Container>
    )
}

export default UpgradeListComponent