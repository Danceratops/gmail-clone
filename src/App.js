import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';

import Header from './Header';
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import Mail from './Mail';

function App() {
  return (
    <Router>

<div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Switch>
          <Route path="/mail">
            <Mail />
          </Route>
          <Route exact path="/">
            <EmailList />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
