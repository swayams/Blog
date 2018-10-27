

class Configuration {
    public links : string[]
    public brand :  any
    public page : any
    public constructor (){
        this.links = ["About", "Portfolio", "Blog", "Contact"]
        this.brand = {            
            name: "Swayam Siddha"           
        }

        
        this.page = {
            about: {
                id: this.links[1],
                image: {
                    alt: 'my ugly face',                    
                    height: '200',
                    width: '200'                   
                },

                content: `
                    Hi, Welcome to my page. I am a frontend engineer with expertise in enterprise front-end lifecycle management. I have extensive experience
                    working with frontend of Microsoft collaboration stack and allied products such as K2 BlackPearl. I have very good hands-on with HTML and CSS, 
                    well versed with the modern paradigms such as data driven design, functional styling, Component driven frameworks.   
                    
                `,

                keywords: [
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'AngularJS',
                    'SCSS',
                    'SASS',
                    'Git',
                    'React',
                    'Typescript',
                    'Web Components'
                ],

                keyword : {
                    JavaScript: {                                              
                        Angular: 3,
                        AngularJS: 3,
                        EcmaScript: 4,
                        React: 4,                        
                        Typescript: 4,
                        Vue: 2,
                        default: 4
                    },

                    CSS: {
                        Bootstrap: 4,
                        Material: 3,
                        SASS: 2,
                        SCSS: 4,
                        default: 4                 
                        
                    },

                    HTML: {
                        HTML5: 4,
                        JSX: 4,
                        TSX: 4,
                        WebComponents: 4,
                        default: 5
                    }
                },

                experience : [
                    {
                        
                        company: 'Tieto Ltd.',
                        id: '1',
                        role: 'Worked in E-Commerce domain, with content management and collaboration platforms, responsible for front-end mantainance, enhancements and new implementations.',
                        start: '2017',
                        title: 'Software Developer I',
                       
                    },
                    {
                        company: 'Cybage Ltd.',
                        end: '2017',
                        id: '2',
                        role: 'Worked in E-Commerce domain, with content management and collaboration platforms, responsible for front-end mantainance, enhancements and new implementations.',
                        start: '2016',
                        title: 'Software Developer I',
                       
                    },
                    {
                        company: 'Bitwise Ltd.',
                        end: '2016',
                        id: '3',
                        role: 'Worked in E-Commerce domain, with content management and collaboration platforms, responsible for front-end mantainance, enhancements and new implementations.',
                        start: '2014',
                        title: 'Software Developer I',
                       
                    }
                ]

                

                


            }
        }
    }
}

export default Configuration