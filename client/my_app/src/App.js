// import logo from "./logo.svg";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import SignUp from "./SignUp.js";
import Dashboard from "./Dashboard.js";
import { useHistory } from "react-router-dom";

function App() {
  let history = useHistory();
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/SignUp" component={SignUp} exact />
        <Route path="/Dashboard" component={Dashboard} exact />
      </Switch>
    </Router>
  );
}

export default App;
