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
var mouse = new Mouse('Mina', 10, 20);
console.log(mouse.getInfo());
module.exports = mouse;
