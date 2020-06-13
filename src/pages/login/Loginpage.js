import React, {useState} from "react"

import {Link} from "react-router-dom"
import {useHistory} from "react-router-dom"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Container"
import Alert from "react-bootstrap/Alert"

import loginToServer from "./LoginHandler"

import "../shared_styles/LoginLogoutPageStyle.css"


const Loginpage = () => {
    const history = useHistory()

    const [showAlert, setShowAlert] = useState(false)
    const [formState, setFormState] = useState({
        "username": "",
        "password": ""
    })

    function handleChange(target, value) {
        setFormState({...formState, [target]: value})
    }

    function handleSubmit(username, pass) {
        loginToServer(username, pass).then((response) => {
            clearProps()
            if (!response) {
                setShowAlert(true)
                return
            }
            history.push("/")
        })
    }

    function checkKeyboardEvent(key) {
        if (key === "Enter") {
            handleSubmit(formState.username, formState.password)
        }
    }

    function clearProps() {
        setFormState({"username": "", "password": ""})
    }

    return <Container fluid className={"bgContainer"}>
        <Row className={"formRowContainer alertContainer"}>
            {showAlert ?
                <Alert className={"errorAlert"} show={showAlert} variant={"danger"}
                       onClose={() => setShowAlert(false)} dismissible={true}>
                    <Alert.Heading>Error</Alert.Heading>
                    <p>
                        {"Invalid Credentials"}
                    </p>
                </Alert>
                :
                null}
        </Row>
        <Row>
            <Container className={"formContainer"}>
                <Row className={"formRowContainer"}>
                    <Form className={"form"}>
                        <Form.Group>
                            <Form.Label className={"formFont"}>Email address / User name</Form.Label>
                            <Form.Control type="username"
                                          id={"username"}
                                          name={"username"}
                                          placeholder="Enter E-Mail or Username"
                                          value={formState.username || ""}
                                          className={"formInputfield"}
                                          onChange={(event) => handleChange(event.target.name, event.target.value)}
                                          onKeyPress={(event) => checkKeyboardEvent(event.key)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className={"formFont"}>Password</Form.Label>
                            <Form.Control type="password"
                                          id={"password"}
                                          name={"password"}
                                          placeholder="Password"
                                          value={formState.password || ""}
                                          className={"formInputfield"}
                                          onChange={(event) => handleChange(event.target.name, event.target.value)}
                                          onKeyPress={(event) => checkKeyboardEvent(event.key)}/>
                        </Form.Group>
                        <Container className={"formBtnContainer"}>
                            <Button variant="primary"
                                    onClick={() => handleSubmit(formState.username, formState.password)}
                                    className={"formBtn"} aria-controls={"fade-alert"}
                                    aria-expanded={showAlert}>{"Login"}</Button>
                        </Container>
                    </Form>
                </Row>
                <Link to={"/register"} className={"formFont registerLink"}
                      onClick={clearProps}>{"New here? Register!"}</Link>
            </Container>
        </Row>
    </Container>
}

export default Loginpage