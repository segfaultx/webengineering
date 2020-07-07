import React, {useState, useEffect, useContext} from "react"
import "../../../pages/mainpage/mainpagecomponentstyle.css"
import {Container, Row} from "react-bootstrap"
import UpgradeComponent from "./UpgradeComponent"
import Cookies from 'js-cookie'
import {CPSContext} from "../../../contexts/cpsContext"
import upgradeSound from '../../media/audio/buyUpgrade.mp3'
import {BoughtUpgradeContext} from "../../../contexts/boughtUpgradesContext"
import {VolumeContext} from "../../../contexts/volumeContext"
import {ClickContext} from "../../../contexts/clickContext"

const UpgradeListComponent = () => {

    const {cps} = useContext(CPSContext)
    const {clicks} = useContext(ClickContext)
    const {volume} = useContext(VolumeContext)

    const [upgradeList, setUpgradeList] = useState([])
    const [userToken] = useState(Cookies.get('token'))
    const [error, setError] = useState('')
    const [buyRequestSent, setBuyRequestSent] = useState(false)
    const {boughtUpgrades,setBoughtUpgrades}=useContext(BoughtUpgradeContext)

    let audioBuy = new Audio(upgradeSound)
    audioBuy.preload = 'auto'
    audioBuy.load()

    const start = (sound) => {
        let click = sound.cloneNode()
        if(volume) click.play()
    }

    const config = {
        method: 'GET',
        headers: {Authorization: `Bearer ${userToken}`}
    };

    const fetchAvailableUpgrades = async () => {
        const response = await fetch('http://server.bykovski.de:8000/upgrades/available', config)
        const responseJson = await response.json()
        if(response.status === 200){
            setUpgradeList(responseJson)
        } else {
            setError(response.status)
        }

    }

    const fetchBoughtUpgrades = async () => {
        const response = await fetch('http://server.bykovski.de:8000/upgrades/current-user', config)
        const responseJson = await response.json()
        if(response.status === 200){
            setBoughtUpgrades(responseJson)
        } else {
            setError(response.status)
        }

    }

    useEffect(() => {
        fetchAvailableUpgrades()
    }, [cps, buyRequestSent])


    useEffect(() => {
        fetchBoughtUpgrades()
    }, [buyRequestSent])

    const handleBuy = async (upgrade_id) => {
        setBuyRequestSent(true)
        const response = await fetch(`http://server.bykovski.de:8000/upgrades/${upgrade_id}/buy`, config)
        const responseJson = await response.json()
        if(response.status === 200){
            start(audioBuy)
            setBuyRequestSent(false)
        } else {
            setError(responseJson.detail)
        }

    }

    let boughtUpgradeComponents = boughtUpgrades
        .map(item =>
            <UpgradeComponent
                key={item.upgrade.id} id={item.upgrade.id}
                multiplier={item.upgrade.multiplier}
                cost={item.upgrade.cost}
                order={item.upgrade.order}
                buyUpgrade={handleBuy}
                boughtStatus={true}
            />
        )

    let upgradeComponents = upgradeList
        .map(item =>
            <UpgradeComponent
                key={item.id} id={item.id}
                multiplier={item.multiplier}
                cost={item.cost}
                order={item.order}
                buyUpgrade={handleBuy}
                boughtStatus={((clicks - item.cost) <= 0)}
            />)

    return (
        <Container className='upgradeContainer'>
            <h2 className={"upgradeHeader"}> Weapon Shop </h2>

            <Container className='upgradeList'>
                <Row>
                    {upgradeComponents}
                </Row>
            </Container>
            <hr/>
            <h2 className={"upgradeHeader"}>Inventory</h2>

            <Container className='upgradeList'>
                <Row>
                    {boughtUpgradeComponents}
                </Row>
            </Container>
        </Container>
    )
}

export default UpgradeListComponent