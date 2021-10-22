function Cat() {
    (this.name = "Tom"), (this.eatList = []);
}
function Cat(name, listEat, width) {
    (this.name = name), (this.eatList = listEat);
    this.width = width;
}
Cat.prototype.eat = function (mouse) {
    this.eatList.push(mouse);
};
const cat1 = new Cat();
const cat2 = new Cat("meo", ["chuot", "ca"]);
console.log(cat1);
console.log(cat2);
module.exports = Cat;
