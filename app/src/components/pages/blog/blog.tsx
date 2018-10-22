import * as React from 'react';

export interface IBlogProps {
    index: string;
}
 
export interface IBlogState {
    current: string;
}
 
class Blog extends React.Component<IBlogProps, IBlogState> {
    constructor(props: IBlogProps) {
        super(props);
        this.state = { current: 'adf' };
    }
    public render() { 
        return (
             <div>
                Blog page
            </div> 
            );
    }
}
 
export default Blog;
