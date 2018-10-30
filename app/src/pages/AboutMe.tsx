import * as React from 'react';
import Experience from '../components/Experience';
import Image from '../components/Image';
import TextBlock from '../components/TextBlock';
import face from '../config/assets/brand-img.jpg';
import Config from '../config/configuration';
import Keywords from '../containers/Keywords';
 
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