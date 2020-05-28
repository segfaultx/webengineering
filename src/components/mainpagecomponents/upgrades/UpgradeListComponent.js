import React, {useState, useEffect, useContext} from "react"
import "../mainpagecomponent/mainpagecomponentstyle.css"
import {Col, Container} from "react-bootstrap"
import UpgradeComponent from "./UpgradeComponent"
import Cookies from 'js-cookie'
import {CPSContext} from "../mainpagecomponent/cpsContext";
import {ClickContext} from "../mainpagecomponent/clickContext";

const UpgradeListComponent =()=>{
    //const {clicks} = useContext(ClickContext)
    const {cps} = useContext(CPSContext)
    const [upgradeList, setUpgradeList] = useState([])
    const [userToken] = useState(Cookies.get('token'))
    const [error, setError] = useState('')
    const [buyRequestSend, setBuyRequestSend] = useState(false)
    const [boughtUpgrades, setBoughtUpgrades] = useState([])

    const config = {
        method: 'GET',
        headers: { Authorization: `Bearer ${userToken}` }
    };

    const fetchAvailableUpgrades = async () => {
         await fetch('http://server.bykovski.de:8000/upgrades/available',config)
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
    }

    const fetchBoughtUpgrades = async () => {
         await fetch('http://server.bykovski.de:8000/upgrades/current-user',config)
            .then(response => {
                if(response.status === 200){
                    response.json()
                        .then(data => setBoughtUpgrades(data))
                }
            })
            .catch(err => {
                setError(err.message)
                console.log(error)
            })
    }

    useEffect(() => {
        fetchAvailableUpgrades()
    },[cps, buyRequestSend])


    useEffect(() => {
        fetchBoughtUpgrades()
    },[buyRequestSend])

    const handleBuy = async (upgrade_id) => {
        setBuyRequestSend(true)
        await fetch(`http://server.bykovski.de:8000/upgrades/${upgrade_id}/buy`,config)
            .then(response => {
                if(response.status === 200){
                    setBuyRequestSend(false)
                } else {
                    response.json()
                        .then(detail => setError(detail))
                }
            })
    }


    let boughtUpgradeComponents = boughtUpgrades.map(item =>
        <UpgradeComponent
            key={item.upgrade.id} id={item.upgrade.id}
            multiplier={item.upgrade.multiplier}
            cost={item.upgrade.cost}
            order={item.upgrade.order}
            buyUpgrade = {handleBuy}
            boughtStatus = {true}
        />)


    let upgradeComponents = upgradeList.map(item =>
        <UpgradeComponent
            key={item.id} id={item.id}
            multiplier={item.multiplier}
            cost={item.cost}
            order={item.order}
            buyUpgrade = {handleBuy}
            boughtStatus = {false}
        />)
    return(
        <Container className="upgradeList">
            <Col >
                {console.log('Upgrades: ', boughtUpgrades)}
                <br/>
                <h2>Upgrade List</h2>
                {upgradeComponents}
                <hr/>
                <h2>Bought Upgrades</h2>
                {boughtUpgradeComponents}
            </Col>
        </Container>
    )
}

export default UpgradeListComponent