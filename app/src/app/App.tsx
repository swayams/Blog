import * as React from 'react';
import Brand from '../components/Logo/Brand';
import Navigation from '../components/Navigation/Nav';
import Config from '../config/configuration'
import './App.scss';



class App extends React.Component {
  private config: any;

  public constructor() {
    super({}, {})
    this.config = new Config()
    
  }


  public render() {
    return (
      <div>
        <header>
          <Brand name={this.config.brand.name} img={this.config.brand.image}/>      
          <Navigation links={this.config.links}/>
        </header>
        
      </div>
    );
  }
}

export default App;
