import React from 'react';
import FormComp from "./components/formcomponent/Formcomponent"
import loginToServer from "./components/util/LoginHandler"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"
import MainPageComponent from "./components/mainpagecomponents/mainpagecomponent/MainPageComponent";


function App() {
    return (
        <div className="App">
            <header className="App-header">
            </header>
            <Router>
                <Switch>
                    <Route path={"/login"}>
                        <FormComp btnText={"Login"}
                                  func={loginToServer}
                                  errormsg={"Invalid credentials"}
                                  link={"/register"}
                                  linkText={"New? Register!"}/>
                    </Route>
                    <Route path={"/register"}>
                        <FormComp btnText={"Register"}
                                  func={null}
                                  errormsg={"Username already taken"}
                                  link={"/login"}
                                  linkText={"Already have an account? Log in!"}/>
                    </Route>
                    <Route path={"/mainpage"}>
                        <MainPageComponent/>
                    </Route>
                </Switch>
                <Redirect to={{pathname: "/mainpage"}}/>

            </Router>
        </div>
    )
}

export default App
