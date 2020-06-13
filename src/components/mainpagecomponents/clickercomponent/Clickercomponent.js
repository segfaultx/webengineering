import React, {useContext} from "react"
import {useEffect, useRef, useState} from "react"
import Cookies from "js-cookie"
import Config from "../../../config"
import {Overlay} from "react-bootstrap";
import {CPSContext} from "../../../contexts/cpsContext";
import {Transition} from "react-transition-group";

import './clickerComponentStyle.css'
import damage from "../../media/audio/damage.mp3";
import {ClickContext} from "../../../contexts/clickContext";

const Clickercomponent = ({initialCounterValue = 0}) => {
    const [ws, setWs] = useState(null)
    const [counter, setCounter] = useState(initialCounterValue)
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const {clicks}= useContext(ClickContext)


    useEffect(() => {
        let initWs = new WebSocket(`${Config.websocketUrl}/game/click?token=${Cookies.get("token")}`)
        initWs.onmessage = handleUpdate
        setWs(initWs)
        return () => initWs.close()
    }, [])

    function handleUpdate(message){
        console.log(message)
        setCounter(counter + JSON.parse(message.data)["points"])
    }

    function handleClick() {
        if (ws !== null) {
            //console.log("click send")
            ws.send(`token=${Cookies.get("token")}`)
            setShow(true)
        }
    }

    let audio = new Audio(damage)
    audio.preload = 'auto'
    audio.load()

    const start = () => {
        let click = audio.cloneNode()
        click.volume = 0.1
        click.play()
    }

    const showClick = (
        <div className='damagePoints'>
            +{counter}
        </div>
    )

    const duration = 300;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
    };

    const Fade = ({ in: inProp }) => (
        <Transition in={inProp} timeout={duration}>
            {state => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    Test
                </div>
            )}
        </Transition>
    );

    return(
        <div>
            <button onMouseDown={start} onClick={handleClick} ref={target}>Click me!</button>
            <Overlay
                target={target.current}
                show={show}
                placement="top"
            >
                {({
                      placement,
                      scheduleUpdate,
                      arrowProps,
                      outOfBoundaries,
                      show: _show,
                      ...props
                  }) => (
                    <div
                        {...props}
                    >
                        {showClick}
                    </div>
                )}
            </Overlay>
        </div>
    )

}

export default Clickercomponent