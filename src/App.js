import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import login from "./view-controller/login";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={login} />
          
        
      </Switch>
    </Router>
  );
}

export default App;