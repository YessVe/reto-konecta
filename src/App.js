import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import login from "./view-controller/login/login";
import viewManager from "./view-controller/manager/manager";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={login} />
        <Route exact path="/manager" component={viewManager} />
        
      </Switch>
    </Router>
  );
}

export default App;
