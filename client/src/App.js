import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import Contacts from './components/Contacts/Contacts';
import NewContact from './components/NewContact/NewContact';

import './App.css';

const App = () => {
  return (
    <>
    <Container fluid>
      <Router>
        <Switch>
          <Route exact path="/" component={Contacts} />
          <Route path="/add" component={NewContact} />
        </Switch>
        </Router>
    </Container>
  </>
  );
}

export default App;