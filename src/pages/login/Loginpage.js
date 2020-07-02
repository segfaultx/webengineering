import React, {useState} from "react"

import {Link} from "react-router-dom"
import {useHistory} from "react-router-dom"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Container"
import Alert from "react-bootstrap/Alert"

import loginToServer from "./LoginHandler"

import "../shared_styles/SharedPagesStyle.css"


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

    async function handleSubmit(event) {
        event.preventDefault()
        let response = await loginToServer(formState.username, formState.password)
        clearProps()
        if (!response) {
            setShowAlert(true)
            return
        }
        history.push("/characterselect")
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
                    <Form className={"form"} onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label className={"formFont"}>Email address / User name</Form.Label>
                            <Form.Control type="username"
                                          id={"username"}
                                          name={"username"}
                                          placeholder="Enter E-Mail or Username"
                                          value={formState.username || ""}
                                          className={"formInputfield"}
                                          onChange={(event) => handleChange(event.target.name, event.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className={"formFont"}>Password</Form.Label>
                            <Form.Control type="password"
                                          id={"password"}
                                          name={"password"}
                                          placeholder="Password"
                                          value={formState.password || ""}
                                          className={"formInputfield"}
                                          onChange={(event) => handleChange(event.target.name, event.target.value)}/>
                        </Form.Group>
                        <Container className={"formBtnContainer"}>
                            <Button variant="primary"
                                    className={"formBtn"} aria-controls={"fade-alert"}
                                    aria-expanded={showAlert} type={"submit"}>{"Login"}</Button>
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