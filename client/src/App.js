import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./utils/PrivateRoute";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>
      <br></br>
      <Link to="/bubblepage">Bubbles!!</Link>
      <br />
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/bubblepage" component={BubblePage} />
      </Switch>
    </div>
  );
}

export default App;
