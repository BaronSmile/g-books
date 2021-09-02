import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BookInfo from "../BookInfo";
import Search from "../Search";

function App() {

  return (
    <Router>
      <Switch>
          <Route exact  strict path={'/info/:id'} component={BookInfo}/>
          <Route exact path="/" component={Search}/>
      </Switch>
    </Router>
  );
}

export default App;
