import * as React from 'react';


import Header from '../containers/Header';

import './App.scss';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../pages/AboutMe';
import Blog from '../pages/Blog';
import Contacts from '../pages/Contact';
import Portfolio from '../pages/Portfolio';





class App extends React.Component {



  public render() {
    return (
      <div>
       

        <Router >
           <div>
            <Header/>
            <Switch>
              
              <Route path="/" component = {About} exact = {true} />
              <Route path="/Blog" component = {Blog} />
              <Route path="/Contact" component = {Contacts} />
              <Route path="/Portfolio" component = {Portfolio} />
            </Switch>
          </div>
        </Router>
    
      </div>
    );
  }
}

export default App;

