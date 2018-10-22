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
                    Hi, Welcome to my page. I am a frontend engineer with expertise in enterprise front-end lifecycle management. I have extensive experience
                    working with frontend of Microsoft collaboration stack and allied products such as K2 BlackPearl. I have very good hands-on with HTML and CSS, 
                    well versed with the modern paradigms such as data driven design, functional styling, Component driven frameworks.   
                    Hi, Welcome to my page. I am a frontend engineer with expertise in enterprise front-end lifecycle management. I have extensive experience
                    working with frontend of Microsoft collaboration stack and allied products such as K2 BlackPearl. I have very good hands-on with HTML and CSS, 
                    well versed with the modern paradigms such as data driven design, functional styling, Component driven frameworks.   
                    Hi, Welcome to my page. I am a frontend engineer with expertise in enterprise front-end lifecycle management. I have extensive experience
                    working with frontend of Microsoft collaboration stack and allied products such as K2 BlackPearl. I have very good hands-on with HTML and CSS, 
                    well versed with the modern paradigms such as data driven design, functional styling, Component driven frameworks.   
                
                `
                

                


            }
        }
    }
}

export default Configuration