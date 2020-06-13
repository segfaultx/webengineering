import React, {useState, useEffect, useContext} from "react"
import "../../../pages/mainpage/mainpagecomponentstyle.css"
import {Col, Container, Row} from "react-bootstrap"
import UpgradeComponent from "./UpgradeComponent"
import Cookies from 'js-cookie'
import {CPSContext} from "../../../contexts/cpsContext"
import upgradeSound from '../../media/audio/buyUpgrade.mp3'

const UpgradeListComponent =()=>{

    const {cps} = useContext(CPSContext)
    const [upgradeList, setUpgradeList] = useState([])
    const [userToken] = useState(Cookies.get('token'))
    const [error, setError] = useState('')
    const [buyRequestSent, setBuyRequestSent] = useState(false)
    const [boughtUpgrades, setBoughtUpgrades] = useState([])

    let audio = new Audio(upgradeSound)
    audio.preload = 'auto'
    audio.load()

    const start = () => {
        audio.play()
    }

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
    },[cps, buyRequestSent])


    useEffect(() => {
        fetchBoughtUpgrades()
    },[buyRequestSent])

    const handleBuy = async (upgrade_id) => {
        setBuyRequestSent(true)
        await fetch(`http://server.bykovski.de:8000/upgrades/${upgrade_id}/buy`,config)
            .then(response => {
                if(response.status === 200){
                    start()
                    setBuyRequestSent(false) 
                } else {
                    response.json()
                        .then(detail => setError(detail))
                }
            })
    }

    let boughtUpgradeComponents = boughtUpgrades
        .map(item =>
            <UpgradeComponent
                key={item.upgrade.id} id={item.upgrade.id}
                multiplier={item.upgrade.multiplier}
                cost={item.upgrade.cost}
                order={item.upgrade.order}
                buyUpgrade = {handleBuy}
                boughtStatus = {true}
            />
    )

    let upgradeComponents = upgradeList
        .map(item =>
        <UpgradeComponent
            key={item.id} id={item.id}
            multiplier={item.multiplier}
            cost={item.cost}
            order={item.order}
            buyUpgrade = {handleBuy}
            boughtStatus = {false}
        />)

    return(
        <Container className='upgradeContainer'>
                <Col >
                    <br/>
                    <h2> Weapon Shop </h2>

                    <Container className = 'upgradeList'>
                        <Row>
                            {upgradeComponents}
                        </Row>
                    </Container>

                    <hr/>
                    <h2>Inventory</h2>

                    <Container className = 'upgradeList'>
                        <Row>
                            {boughtUpgradeComponents}
                        </Row>
                    </Container>

                </Col>
        </Container>
    )
}

export default UpgradeListComponent