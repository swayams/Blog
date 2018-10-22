import * as React from 'react';


import Header from '../components/header/header';

import './App.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blog from '../components/pages/blog/blog';
import Contacts from '../components/pages/contact/contact';
import Portfolio from './../components/pages/portfolio/portfolio';
import About from '../components/pages/about/AboutMe';



class App extends React.Component {

  public render() {
    return (
      <div>
        <Header/>

        <BrowserRouter>
          <Switch>
            <Route path="/About" component = {About} exact = {true} />
            <Route path="/Blog" component = {Blog} />
            <Route path="/Contact" component = {Contacts} />
            <Route path="/Portfolio" component = {Portfolio} />
          </Switch>
        </BrowserRouter>
    
      </div>
    );
  }
}

export default App;
