import * as React from 'react';

export interface IExperienceProps {
    experiences: any []
}
 
export interface IExperienceState {
    current: any
}

const classes ={
    item: 'experience',
    position: 'position',
    root: 'experiences',
    years: 'years',
    
}
 
class Experience extends React.Component<IExperienceProps, IExperienceState> {
    constructor(props: IExperienceProps) {
        super(props);
        this.state = { current:  '' };
    }
    public render() { 
        return ( 
            <div className={classes.root} >
                <h1>Experience</h1>
                {
                    this.props.experiences.map( exp => 
                        {
                           return (
                             <div key={exp.id} className={classes.item}>
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
         );
    }
}
 
export default Experience;