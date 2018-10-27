import * as React from 'react';

export interface IPortfolioProps {
    projects: string[]
}
 
export interface IPortfolioState {
    test: string;
}

const classes = {
    root: 'portfolio'
}
 
class Portfolio extends React.Component<IPortfolioProps, IPortfolioState> {
    constructor(props: IPortfolioProps) {
        super(props);
        this.state = { test: 'test' };
    }
    public render() { 
        return ( 
            <div className={classes.root}>
                Test Portfolio
                
            </div>
         );
    }
}
 
export default Portfolio;