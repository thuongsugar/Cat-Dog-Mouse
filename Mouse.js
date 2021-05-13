class Mouse {
    constructor(name, width, height){
        this.name = name;
        this.width = width;
        this.height = height;
        
    }
    getInfo(){
        return `${this.name} ${this.width} ${this.height}`;
    }
}
module.exports = Mouse;
