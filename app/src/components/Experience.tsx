import * as React from 'react';
import { Suspense } from 'react';
import { getNode } from '../services/db';

import { List } from 'immutable';



 
export interface IExperienceState {
    experiences: List<any>
    current: any
}

const classes ={
    item: 'experience',
    position: 'position',
    root: 'experiences',
    years: 'years',
    
}
 
class Experience extends React.Component<{}, IExperienceState> {
    constructor({}) {
        super({});
        this.state = { current:  '', experiences: List([]) };
    }

    public componentWillMount() {
        getNode('pages/about/experience').then((data) => {
            const content = data.val()
            this.setState({experiences: List(content)})
        })
    }
  
    public render() { 
        return ( 
            <Suspense fallback={<h2>Product list is loading...</h2>}>
                <div className={classes.root} >
                <h1>Experience</h1>
                {
                    this.state.experiences.map( (exp, index) => 
                        {
                           return (
                             <div key={index} className={classes.item}>
                                    <h2 >{exp.company}</h2>
                                    <i className={classes.years}>{exp.start} {' - '}{ exp.end ? exp.end : 'till date'} </i>
                                    <i className={classes.position}> {exp.title}</i>
                                    <p> {exp.role}</p>
                             </div>
                           )
                        }
                    )
                }
            </div>
            </Suspense>
            
         );
    }
}
 
export default Experience;