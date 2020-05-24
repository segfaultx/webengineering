import React,{useState, useEffect} from "react"
import "../mainpagecomponent/mainpagecomponentstyle.css"
import {Col, Container} from "react-bootstrap"
import UpgradeComponent from "./UpgradeComponent"


const UpgradeListComponent =()=>{

    const [upgradeList, setUpgradeList] = useState([])
    const [userToken, setUserToken] = useState('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJieWtvZiIsImV4cCI6MTU5MDQwNjI4M30.AMFF4yMsHRFORPs2HOMsEsDjZEQE16wFCaLcKmJ901Y')
    const [error, setError] = useState('')

    const config = {
        method: 'GET',
        headers: { Authorization: `Bearer ${userToken}` }
    };

    useEffect(() => {
        fetch('http://server.bykovski.de:8000/upgrades/available',config)
            .then(response => {
                if(response.status === 200){
                    response.json()
                        .then(data => setUpgradeList(data))
                }
            })
            .catch(err => {
                setError(err.message)
                console.log(error)
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