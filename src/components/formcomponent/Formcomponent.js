import React, {useState} from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Container"
import Alert from "react-bootstrap/Alert"
import "bootstrap/dist/css/bootstrap.min.css"
import "./formComponentStyle.css"

const FormComp = ({btnText, func, errormsg, link}) => {

    const [formState, setState] = useState({
        "username": "",
        "password": ""
    })
    const [showAlert, setShowAlert] = useState(false)

    function handleChange(target, value) {
        setState({...formState, [target]: value})
    }

    function handleLogin(username, pass) {
        func(username, pass).then((response) => {
            if(!response){
                setShowAlert(true)
                return
            }
            console.log("made it past")
        })
    }
    function checkKeyboardEvent(key){
        if (key === "Enter"){
            handleLogin(formState.username, formState.password)
        }
    }

    return <Container fluid className={"bgContainer"}>
        <Container className={"formContainer"}>
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
                                onClick={() => handleLogin(formState.username, formState.password)}
                                className={"formBtn"} aria-controls={"fade-alert"}
                                aria-expanded={showAlert}>{btnText}</Button>
                    </Container>
                </Form>
            </Row>
            <a href={link} className={"formFont registerLink"}>New? Register! </a>
        </Container>
    </Container>
}

export default FormComp