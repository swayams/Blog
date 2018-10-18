class Configuration {
    public links : string[]
    public brand :  any
    public constructor (){
        this.links = ["About", "Portfolio", "Blog", "Contact Me"]
        this.brand = {            
            name: "Swayam Siddha"           
        }
    }
}

export default Configuration