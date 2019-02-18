import * as React from 'react';
import Projects from '../containers/Projects';

export interface IPortfolioProps {
    projects: string
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
                <Projects />
                
            </div>
         );
    }
}
 
export default Portfolio;