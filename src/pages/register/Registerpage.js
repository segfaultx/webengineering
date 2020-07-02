import React, {useState} from "react"

import {Link} from "react-router-dom"
import {useHistory} from "react-router-dom"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Container"
import Alert from "react-bootstrap/Alert"

import registerUser from "./RegisterHandler"

import "../shared_styles/SharedPagesStyle.css"

const Registerpage = () => {

    const history = useHistory()
    const defaultErrormsg = "Username already taken"
    const [errormsg, setErrormsg] = useState(defaultErrormsg)
    const [showAlert, setShowAlert] = useState(false)
    const [formState, setFormState] = useState({"username": "", "password": "", "confirmpassword": ""})

    function handleChange(target, value) {
        setFormState({...formState, [target]: value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (formState.password !== formState.confirmpassword) {
            setShowAlert(true)
            setErrormsg("Passwords do not match")
            console.log("made it to pw check")
            return
        }
        registerUser(formState.username, formState.password).then((response) => {
            clearProps()
            if (!response) {
                setShowAlert(true)
                setErrormsg(defaultErrormsg)
                return
            }
            history.push("/login")
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
                        {errormsg}
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
                        <Form.Group>
                            <Form.Label className={"formFont"}>Confirm Password</Form.Label>
                            <Form.Control type="password"
                                          id={"confirmpassword"}
                                          name={"confirmpassword"}
                                          placeholder="Confirm Password"
                                          value={formState.confirmpassword || ""}
                                          className={"formInputfield"}
                                          onChange={(event) => handleChange(event.target.name, event.target.value)}/>
                        </Form.Group>
                        <Container className={"formBtnContainer"}>
                            <Button variant="primary"
                                    type={"submit"}
                                    className={"formBtn"} aria-controls={"fade-alert"}
                                    aria-expanded={showAlert}>{"Register"}</Button>
                        </Container>
                    </Form>
                </Row>
                <Link to={"/login"} className={"formFont registerLink"}
                      onClick={clearProps}>{"Already have an account? Log in!"}</Link>
            </Container>
        </Row>
    </Container>
}

export default Registerpage