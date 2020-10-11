import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./Pages/Home";
import Market from "./Pages/Market";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={`/`} exact component={Home}></Route>
          <Route path={`/:name`} component={Market}></Route>
        </Switch>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
