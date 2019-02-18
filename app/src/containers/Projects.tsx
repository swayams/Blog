import { List } from 'immutable';
import * as React from 'react';
import { getNode } from '../services/db';


 
export interface IProjectsState {
    current: number
    items: List<any>
}

 

 
class Projects extends React.Component<{}, IProjectsState> {
    constructor(props: any) {
        super(props);
        this.state = {current : 0, items: List([])  };
    }

    public componentDidMount() {
        getNode('pages/portfolio/items').then((data) => {
            const content = data.val()
            this.setState({items: List(content)})
        })
    }
    public render() { 
        return (  
           <React.Suspense fallback={<div>Portfolio</div>}>
           <ul className={classes.root}>
               {
                    this.state.items.map( (item, index) => {
                        return ( 
                            <li key={index} className={classes.item._self}>
                                <a href={item.href} target="_blank" className={classes.item.link._self} >
                                    <h5 className={classes.item.link.title}> {item.name}</h5>
                                    <p className={classes.item.link.description}> {item.description}</p>
                                </a>
                            </li>
                        )
                    })
                }    
            </ul></React.Suspense>
        );
    }
}


const classes = {
    item: {
        _self: 'item',
       link: {
            _self: 'link',
            description: 'description',
            title: 'title'
       }
    },
    root: 'projects'
    
}
 
export default Projects;