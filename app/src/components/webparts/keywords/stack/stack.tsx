import * as React from 'react';
import Config from '../../../../config/configuration';

export interface IStackProps {
    match : any
}
 
export interface IStackState {
    id: any
}

const classes = {
    item: {
        name: 'name',
        root: 'stack',
        value: 'rating',      
        
    },
    root: 'stacks'
}

class Stack extends React.Component<IStackProps, IStackState> {
    public config: Config;
    public id: string;
    public stackObj : any;

    constructor(props: IStackProps) {
        super(props);
        this.state = { id: this.props.match.params.id  };
        this.config = new Config();
    }

    

    

    public render() { 
        this.id = this.props.match.params.id
        this.stackObj = this.config.page.about.keyword[this.id]

        return ( 
            <div className = {classes.root}> 
                {
                    Object.keys(this.stackObj).map((item) => {
                        return <div key={item} className={classes.item.root}>
                                    <i className={classes.item.name}>{item}</i>
                                    <i className={classes.item.value}>
                                        {
                                            this.createRatings(this.stackObj[item])
                                            
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
            table.push(<div />)
        }

        return table;
    }
}
 
export default Stack;