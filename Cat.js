function Cat() {
    (this.name = "Tom"), (this.eatList = []);
}
Cat.prototype.eat = function (mouse) {
    this.eatList.push(mouse);
};
const cat1 = new Cat();
console.log(cat1);
module.exports = Cat;
