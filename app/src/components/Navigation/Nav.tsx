import * as React from 'react';

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
            <ul className={classes.nav}>
            { 
              this.props.links.map(
              (link) => {
                  return <li key={link} className={classes.node}> 
                            <a className={classes.link} href={"#"+link}>{link}</a>  
                         </li>
              })
            }
            </ul>
         );
    }
}
 
export default Navigation;