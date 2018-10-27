import * as React from 'react';
import face from '../../../config/assets/brand-img.jpg';
import Config from '../../../config/configuration';
import TextBlock from '../../content/textBlock';
import Image from '../../thumbnail/image';
import Keywords from '../../webparts/keywords/keywords';
import Experience from './../../webparts/experience/experience';

 

 
const classes = {
    root: 'about'
}
class About extends React.Component {
    private config: any;
    constructor(props : {}) {

        super(props);
       this.config = new Config();
    }
    public render() { 
        return ( 
            <div className={classes.root} id={this.config.page.about.id}> 
            <Image url={face} height={this.config.page.about.image.height} 
                   width={this.config.page.about.image.width} 
                   altText={this.config.page.about.image.alt} />
                           
                 <TextBlock content={this.config.page.about.content} />

                 <Experience experiences={this.config.page.about.experience} />

                 <Keywords keywords = {this.config.page.about.keyword} />
            </div>
         );
    }
}
 
export default About;