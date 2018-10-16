import * as React from 'react';

export interface INavigationProps {
    links: string []
}
 
export interface INavigationState {
    selected: string
}
 
class Navigation extends React.Component<INavigationProps, INavigationState> {
    constructor(props: INavigationProps) {
        super(props);
        this.state = { selected: '/'  };
    }
    public render() { 
        return ( 
           this.props.links.map(
              (link) => {
                  return <li key={link}> <a href={"#"+link}>{link}</a>  </li>
              })
         );
    }
}
 
export default Navigation;