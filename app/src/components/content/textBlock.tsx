import * as React from 'react';


interface ITextBlockProps {
    content: string;
}


class TextBlock extends React.Component<ITextBlockProps> {
 

    constructor(props: ITextBlockProps) {
        super(props,{});
       
    }
    public render() { 
        return (  <p>
            {this.props.content}
        </p>);
    }
}
 
export default TextBlock;