import * as React from 'react';
import { Link  } from 'react-router-dom';

export interface INavigationProps {
    links: ILink []
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
              (link, index) => {
                  return <li key={index} className={classes.node}> 
                            <Link className={classes.link} to={link.href}>{link.name}</Link>  
                         </li>
              })
            }
            </div>
         );
    }
}
 
export default Navigation;


export interface ILink {
    href: string,
    name: string
}