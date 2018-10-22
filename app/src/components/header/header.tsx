import * as React from 'react';
import Config from '../../config/configuration';
import Brand from './Logo/Brand';
import Navigation from './Navigation/Nav';



 
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