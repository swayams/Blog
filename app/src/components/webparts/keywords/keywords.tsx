import * as React from 'react';
import { BrowserRouter as Router, Link, Route  } from 'react-router-dom';
import Stack from './stack/stack';

export interface IKeywordsProps {
    keywords: any[]
}
 
export interface IKeywordsState {
    current: string;
}

const classes ={
    item: 'keyword',

    root: 'keywords'
    
} 
 
class Keywords extends React.Component<IKeywordsProps, IKeywordsState> {
    constructor(props: IKeywordsProps) {
        super(props);
        this.state = { current: '' };
    }
    public render() { 

        const keys = Object.keys(this.props.keywords)

        return ( 
            <Router >
                <div className={classes.root}>
                <h1> SkillSet </h1>
                    {keys.map (
                        keyword => 
                        {
                            return ( <Link className={classes.item} to ={ '/stack/' + keyword} key={keyword}>{keyword}</Link>)
                        }
                    )}

                    <Route path={`/stack/:id`} component={Stack} />

                </div>
                
            </Router>
         );
    }
}
 
export default Keywords;