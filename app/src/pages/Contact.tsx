import * as React from 'react';

export interface IContactsProps {
    value: string
}
 
export interface IContactsState {
    test: string
}
 
class Contacts extends React.Component<IContactsProps, IContactsState> {
    constructor(props: IContactsProps) {
        super(props);
        this.state = { test: 'test'  };
    }
    public render() { 
        return ( 
        <div>
            Contact Page

        </div> 
        );
    }
}
 
export default Contacts;