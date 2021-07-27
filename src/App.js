import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";

import "./App.css";

import Header from "./Header";
import Sidebar from "./Sidebar";
import EmailList from "./EmailList";
import Mail from "./Mail";
import SendMail from "./SendMail";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

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
        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
