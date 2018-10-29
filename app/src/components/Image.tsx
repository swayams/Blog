import * as React from 'react';
export interface ImageProps {
    url: string;
    altText: string;
    height: number;
    width: number;
}
 

const classes = {
    img: 'img'
}

class Image extends React.Component<ImageProps> {
   
    public render() { 
        return ( 
            <img src={this.props.url} height={this.props.height}
                 width={this.props.width} alt={this.props.altText}
                 className={classes.img}/>
         );
    }
}
 
export default Image;