import * as React from 'react';


import Header from '../components/header/header';
import './App.scss';
import About from '../components/pages/about/AboutMe';



class App extends React.Component {

  public render() {
    return (
      <div>
        <Header/>
        <About />
      </div>
    );
  }
}

export default App;
