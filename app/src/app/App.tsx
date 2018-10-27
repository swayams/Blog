import * as React from 'react';


import Header from '../components/header/header';

import './App.scss';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../components/pages/about/AboutMe';
import Blog from '../components/pages/blog/blog';
import Contacts from '../components/pages/contact/contact';
import Portfolio from './../components/pages/portfolio/portfolio';



class App extends React.Component {

  public render() {
    return (
      <div>
       

        <Router >
           <div>
            <Header/>
            <Switch>
              <Route path="/About" component = {About} exact = {true} />
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
