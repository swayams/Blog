import * as React from 'react';
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
      <div className="App">
        <header className="App-header">
      
          <Navigation links={this.config.links}/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
