import { ILink } from "../components/Navigation";

import { AppPages } from './constants';


class Configuration {
    public links : ILink[]
    public brand :  any
    public page : any
    public constructor (){
        this.links = [
            {href: '/', name: AppPages.ABOUT},
            {href: '/portfolio', name: AppPages.PORTFOLIO},
            {href: '/contact', name: AppPages.CONTACTS},
            {href: '/blog', name: AppPages.BLOG},
        ]
        this.brand = {            
            name: "Swayam Siddha"           
        }

        
        this.page = {
            about: {
                id: this.links[0].name,
                image: {
                    alt: 'my ugly face',                    
                    height: '200',
                    width: '200'                   
                },

                content: `
                    Hi, Welcome to my page. I am a frontend engineer with expertise in enterprise front-end lifecycle management. I have extensive experience
                    working with frontend of Microsoft collaboration stack and allied products such as K2 BlackPearl. I have  hands-on with HTML and CSS, 
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
                        rating: 3,
                        topics: {                                              
                            Angular: 3,
                            AngularJS: 3,
                            EcmaScript: 4,
                            React: 4,                        
                            Typescript: 4,
                            Vue: 2
                        }

                    },

                    CSS: {
                       rating: 4 ,
                       topics: { 
                        Bootstrap: 4,
                        Material: 3,
                        SASS: 2,
                        SCSS: 4
                      },
                                    
                        
                    },

                    HTML: {
                        rating: 5,
                        topics: {
                            HTML5: 4,
                            JSX: 4,
                            TSX: 4,
                            WebComponents: 4
                        }
                    }
                },

                experience : [
                    {
                        
                        company: 'Tieto Ltd.',
                        id: '1',
                        role: 'Implement new enhancements, improve, maintain and upgrade front-end infrastructure of enterprise publishing system of a large European e-commerce company. HTML 5 form engine using react, material ui and rest api',
                        start: '2017',
                        title: 'Software Developer I',
                       
                    },
                    {
                        company: 'Cybage Ltd.',
                        end: '2017',
                        id: '2',
                        role: 'UI developer and admin for an enterprise workﬂow tool. Responsible for enhancing, extending and managing system for better usability and intuitiveness',
                        start: '2016',
                        title: 'Software Engineer',
                       
                    },
                    {
                        company: 'Bitwise Ltd.',
                        end: '2016',
                        id: '3',
                        role: 'Mantained and enhanced SharePoint based collaboration and content management portal',
                        start: '2015',
                        title: 'Software Programmer',
                       
                    },
                    {
                        company: 'Paragyte Ltd.',
                        end: '2015',
                        id: '3',
                        role: 'SharePoint consulting. Helped orgainzation adopt and leverage sharepoint to the maximum possible extend, migrations.',
                        start: '2014',
                        title: 'SharePoint Consultant',
                       
                    }
                ]
            },
            contact: {
                facebook: {
                    
                    href: 'abc.xyz',
                    icon:'',
                },
                linkedin: {
                    href: 'abc.xyz',
                    icon:'',
                }
            }
        }
    }
}

export default Configuration