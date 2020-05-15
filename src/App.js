import React from 'react';
import FormComp from "./components/formcomponent/Formcomponent"
import login from "./components/util/LoginHandler"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <FormComp btnText={"Login"} func={login} errormsg={"Invalid credentials"} link={"/register"}/>
    </div>
  );
}

export default App;
