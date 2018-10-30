import * as React from 'react';
import Brand from '../components/Brand';
import Navigation from '../components/Navigation';
import Config from '../config/configuration';



 
class Header extends React.Component{
    private config: any

    constructor( props: {}) {
        super(props)
        this.config =new Config();
    }
     
    public render() { 
        return ( 

            <header>
                <Brand name={this.config.brand.name} img={this.config.brand.image}/>      
                <Navigation links={this.config.links}/>
            </header>
         );
    }
}
 
export default Header;