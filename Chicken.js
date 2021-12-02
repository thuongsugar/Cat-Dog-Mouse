function Chicken() {
    this.name = "tam hoang";
    this.width = 2.0;
    this.age = 10;
}
const ck = new Chicken();
console.log(ck.age);
function Chicken(name, width, age) {
    this.name = name;
    this.width = width;
    this.age = age;
}

module.exports = Chicken;
