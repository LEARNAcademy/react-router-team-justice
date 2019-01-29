import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Work from './pages/Work'
import Contacts from './pages/Contacts'
import PageNotFound from './pages/PageNotFound'

import { Nav, Navbar, NavItem } from 'react-bootstrap'


class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <Navbar >
            <Navbar.Toggle />
            <Navbar.Collapse >
              <Nav >
                <NavItem>
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/about">About</Link>
                </NavItem>
                <NavItem>
                  <Link to="/skills">Skills</Link>
                </NavItem>
                <NavItem>
                  <Link to="/work">Work</Link>
                </NavItem>
                <NavItem>
                  <Link to="/contacts">Contacts</Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/work" component={Work} />
            <Route path="/contacts" component={Contacts} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
