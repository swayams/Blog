import * as React from 'react';
import { Suspense } from 'react';
import { getNode } from 'src/services/db';

const classes = {
    root: 'text-block'
}

interface ITextBlockState {
    content: string;
}


class TextBlock extends React.Component<{}, ITextBlockState> {
   
    constructor({}) {
        super({});
        
        this.state = {
            content: ''
        }


    }

    public componentWillMount() {
        getNode('pages/about/about').then((data) => {
            const content = data.val()
            this.setState({content})
        })
    }
    public render() { 
        return (  
       <Suspense fallback={<div> Suspense</div>}><p className={classes.root}>{this.state.content}</p></Suspense>
        
    );
    }
}
 
export default TextBlock;