import * as React from 'react';
import { BrowserRouter as Router, Link, Route  } from 'react-router-dom';
import { getNode } from 'src/services/db';
import Stack from '../components/Stack';


export interface IKeywordsState {
    keywords: []
    current: string;
}

class Keywords extends React.Component<{}, IKeywordsState> {
    constructor(props: {}) {
        super(props);
        this.state = { current: '', keywords: [] };
    }

    public componentWillMount() {
        getNode('pages/about/skills').then((data) => {
            const content = data.val()
            this.setState({keywords: content})
        })
    }
    public render() { 

        const keys = Object.keys(this.state.keywords)

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

const classes ={
    item: 'keyword',

    root: 'keywords'
    
} 