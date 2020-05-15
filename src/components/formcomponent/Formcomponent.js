import React, {useState} from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Container"
import Alert from "react-bootstrap/Alert"
import "bootstrap/dist/css/bootstrap.min.css"
import "./formComponentStyle.css"

const FormComp = ({btnText, func, errormsg}) => {

    const [formState, setState] = useState({
        "username": "",
        "password": ""
    })
    const [showAlert, setShowAlert] = useState(false)

    function handleChange(target, value) {
        setState({...formState, [target]: value})
    }

    function handleLogin(username, pass) {
        if (func(username, pass)) {

        } else {
            console.log("setShowAlert true")
            setShowAlert(true)
        }
    }

    return <Container className={"formContainer"}>
        <Row>
            {showAlert ?
                <Alert show={showAlert} variant={"danger"} onClose={() => setShowAlert(false)} dismissible={true}>
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
                    <Form.Label>Email address / User name</Form.Label>
                    <Form.Control type="username"
                                  id={"username"}
                                  name={"username"}
                                  placeholder="Enter E-Mail or Username"
                                  value={formState.username || ""}
                                  onChange={(event) => handleChange(event.target.name, event.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                                  id={"password"}
                                  name={"password"}
                                  placeholder="Password"
                                  value={formState.password || ""}
                                  onChange={(event) => handleChange(event.target.name, event.target.value)}/>
                </Form.Group>
                <Container className={"formBtnContainer"}>
                    <Button variant="primary"
                            onClick={() => handleLogin(formState.username, formState.password)}
                            className={"formBtn"}>{btnText}</Button>
                </Container>
            </Form>
        </Row>

    </Container>
}

export default FormComp