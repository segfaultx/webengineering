import React from 'react';
import FormComp from "./components/formcomponent/Formcomponent"
import loginToServer from "./components/util/LoginHandler"
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
            </header>
            <Router>
                <Switch>
                    <Route path={"/login"}>
                        <FormComp btnText={"Login"} func={loginToServer} errormsg={"Invalid credentials"} link={"/register"}/>
                    </Route>
                </Switch>
                <Redirect to={{pathname: "/login"}}/>
            </Router>
        </div>
    );
}

export default App;
