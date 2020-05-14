import React, {useState} from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"

const FormComp = ({btnText, func}) => {

    const [formState, setState] = useState({
        "username": "",
        "password": ""
    })
    return <div>
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Email address / User name</Form.Label>
                    <Form.Control type="username"
                                  id={"username"}
                                  name={"username"}
                                  placeholder="Enter E-Mail or Username"
                                  value={formState.username || ""}
                                  onChange={(event) => setState({...formState, "username": event.target.value})}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                                  id={"password"}
                                  name={"password"}
                                  placeholder="Password"
                                  value={formState.password || ""}
                                  onChange={(event) => setState({...formState, "password": event.target.value})}/>
                </Form.Group>
                <Button variant="primary" onClick={() => func(formState.username, formState.password)}>{btnText}</Button>
            </Form>
        </Container>
    </div>
}

export default FormComp