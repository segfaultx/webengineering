import React from "react"
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"

const Teamgreeter = ({ children }) => {
    return <div><h1>
        { children }
    </h1>
    <Button variant="primary">Bootstrap Button, yay</Button></div>
}

export default Teamgreeter