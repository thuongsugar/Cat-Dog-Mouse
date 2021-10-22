function Cat(name, listEat) {
    (this.name = name), (this.eatList = listEat);
}
Cat.prototype.eat = function (mouse) {
    this.eatList.push(mouse);
};
const cat1 = new Cat("meo", ["chuot", "ca"]);
console.log(cat1);
module.exports = Cat;
