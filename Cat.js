function Cat(){
    this.name = 'Tom',
    this.eatList = [];
}
 Cat.prototype.eat = function(mouse){
    this.eatList.push(mouse);
 }
console.log(new Cat())
module.exports = Cat;