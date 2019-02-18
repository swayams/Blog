import * as React from 'react';

export interface IAuthProps {
    authMethod: any

}
 
export interface IAuthState {
    isLoggedIn: boolean
    message: string
   
}

const classes = {
    button: 'btn',
    message: 'msg',
    root: 'auth'
    
    
}
 
class Auth extends React.Component<IAuthProps, IAuthState> {
    constructor(props: IAuthProps) {
        super(props);
        this.state = { isLoggedIn: false, message: `Hello user` };
    }
    public render() { 
        return ( 
            <div className={classes.root}>
                <div className={classes.message}>{this.state.message},  
                <a href='#' className={classes.button} onClick={this.authenticate}>{this.state.isLoggedIn ? 
                "Log out" : "Log in"}</a></div>
                
            </div>
         );
    }

    public authenticate = () => {
        this.props.authMethod()
    }

}
 
export default Auth;