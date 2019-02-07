import * as React from 'react';
import Config from '../config/configuration';

export interface IStackProps {
    match? : any
}
 
export interface IStackState {
    id: any
}

const classes = {
    item: {
        name: 'name',
        
        rating: 
        {
            default: 'rating',
            empty: 'empty',
            subject:'rating topics',
            overall: 'rating default'
            
        },  

        root: 'stack',
            
        
    },
    root: 'stacks'
}

class Stack extends React.Component<IStackProps, IStackState> {
    
    public config: Config;
    public id: string;
    public stackObj : any;

   

    constructor(props: IStackProps) {
        super(props);
        if (this.props.match !== null) { 
            this.state = { id: this.props.match.params.id  };
           
        }
        this.config = new Config();
    }

    

    

    public render() { 
        const id = this.props.match.params.id
        const rating = this.config.page.about.keyword[id].rating

        const stackObj = this.config.page.about.keyword[id].topics

        return ( 
           
            <div className = {classes.root}> 
              <i className={classes.item.rating.overall}>
                {
                    this.createRatings(rating)
                }
            </i>
                {
                    Object.keys(stackObj).map((item) => {
                        return <div key={item} className={classes.item.root}>
                                    
                                       
                                <i className={classes.item.name}>{item}</i>
                                <i className={classes.item.rating.subject}>
                                    {
                                        this.createRatings(stackObj[item])
                                    }
                                </i>
                            </div>
                    })
                }
            </div>  
        );
    }
    private createRatings = (count: number) => {
        const table = []

        for( let i = 0; i < count; i ++) {
            table.push(<div key={i} />)
        }

        while(table.length < 5) {
            table.push(<div key={table.length} className={classes.item.rating.empty}/>)
        }
        

        return table;
    }
}
 
export default Stack;