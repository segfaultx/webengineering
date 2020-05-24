import React, {useState} from 'react';
import FormComp from "./components/formcomponent/Formcomponent"
import loginToServer from "./components/util/LoginHandler"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"
import registerUser from "./components/util/RegisterHandler";
import MainPage from "./components/mainpage/MainPage";

function App() {
    const [loginFormState, setLoginState] = useState({
        "username": "",
        "password": ""
    })
    const [registerFormState, setRegisterState] = useState({
        "username": "",
        "password": ""
    })
    return (
        <div className="App">
            <header className="App-header">
            </header>
            <Router>
                <Switch>
                    <Route path={"/login"} exact>
                        <FormComp btnText={"Login"}
                                  sendDataToServer={loginToServer}
                                  errormsg={"Invalid credentials"}
                                  link={"/register"}
                                  linkText={"New? Register!"}
                                  formState={loginFormState}
                                  setState={setLoginState}
                                  redirectOnSuccess={"/"}/>
                    </Route>
                    <Route path={"/register"} exact>
                        <FormComp btnText={"Register"}
                                  sendDataToServer={registerUser}
                                  errormsg={"Username already taken"}
                                  link={"/login"}
                                  linkText={"Already have an account? Log in!"}
                                  formState={registerFormState}
                                  setState={setRegisterState}
                                  redirectOnSuccess={"/login"}/>
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
