import * as React from 'react';

 // import path from '../../config/assets/brand-img.jpg';

const classes = {
    root: 'text-block'
}

interface ITextBlockProps {
    content: string;
}


class TextBlock extends React.Component<ITextBlockProps> {

    constructor(props: ITextBlockProps) {
        super(props,{});


    }
    public render() { 
        return (  
       <p className={classes.root}>{this.props.content}</p>
        
    );
    }
}
 
export default TextBlock;