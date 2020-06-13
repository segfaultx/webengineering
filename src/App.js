import React, {useState} from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import Loginpage from "./pages/login/Loginpage"
import Registerpage from "./pages/register/Registerpage"
import MainPage from "./pages/mainpage/MainPage"

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {

    return (
        <div className="App">
            <header className="App-header">
            </header>
            <Router>
                <Switch>
                    <Route path={"/login"} exact>
                        <Loginpage/>
                    </Route>
                    <Route path={"/register"} exact>
                        <Registerpage/>
                    </Route>
                    <Route path={"/"} exact>
                        <MainPage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
