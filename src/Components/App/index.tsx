import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BookInfo from "../BookInfo";
import Search from "../Search";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Search}/>
        <Route path={`/info`} component={BookInfo}/>
      </Switch>
    </Router>
  );
}

export default App;
