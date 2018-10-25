import * as React from 'react';
import { Link  } from 'react-router-dom';

export interface INavigationProps {
    links: string []
}
 
export interface INavigationState {
    selected: string
}

const classes = {
    link: "link",
    nav : "nav",
    node: "node"
}

class Navigation extends React.Component<INavigationProps, INavigationState> {
    constructor(props: INavigationProps) {
        super(props);
        this.state = { selected: '/'  };
    }
    public render() { 
        return ( 
            <div className={classes.nav}>
            { 
              this.props.links.map(
              (link) => {
                  return <li key={link} className={classes.node}> 
                            <Link className={classes.link} to={link}>{link}</Link>  
                         </li>
              })
            }
            </div>
         );
    }
}
 
export default Navigation;