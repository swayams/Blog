import * as React from 'react';


export interface IBrandProps {
    img: string,
    name: string
}
 


const classes = {
    logo: 'logo',
    name: 'name',    
    root: 'root'
}
 
class Brand extends React.Component<IBrandProps> {
    constructor(props: IBrandProps) {
        super(props)
        
    }
    public render() { 
        return ( 
            <div>
                <img src={this.props.img} className={classes.logo} />
                <h1 className={classes.name}>{this.props.name}</h1>
            </div>
         );
    }
}
 
export default Brand;