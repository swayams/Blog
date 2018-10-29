import * as React from 'react';


export interface IBrandProps {
    img: string,
    name: string
}
 


const classes = {
    logo: 'logo',
    name: 'name',    
    root: 'brand'
}
 
class Brand extends React.Component<IBrandProps> {
    constructor(props: IBrandProps) {
        super(props)
        
    }
    public render() { 
        return ( 
            <div className={classes.root}>
                <h1 className={classes.name}>{this.props.name}</h1>
            </div>
         );
    }
}
 
export default Brand;