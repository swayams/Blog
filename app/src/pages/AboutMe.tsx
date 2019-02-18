import * as React from 'react';


import Experience from '../components/Experience';
import Image from '../components/Image';
import TextBlock from '../components/TextBlock';
import face from '../config/assets/brand-img.jpg';
import Config from '../config/configuration';
import Keywords from '../containers/Keywords';
import { getNode } from '../services/db';



 
const classes = {
    root: 'about'
}




class About extends React.Component<{}, {}> {
    private config: any;
   
    constructor(props : {}) {
        super(props);  
         
        this.config = new Config();
    }

    public componentDidMount() {
        getNode('/pages/portfolio').then(
            (data) => {
                // tslint:disable-next-line:no-console
                const  content  = data.val()
                this.setState({skills: content.skills})
            }
        )
    }
    public render() { 
        return ( 
            <div className={classes.root} id={this.config.page.about.id}> 
            <Image url={face} height={this.config.page.about.image.height} 
                   width={this.config.page.about.image.width} 
                   altText={this.config.page.about.image.alt} />
                           
                 <TextBlock />

                 <Experience  />

                 <Keywords />
            </div>
         );
    }
}
 
export default About;