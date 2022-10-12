function Person(name) {
    this.name = name
}
let person = new Person("zhangsan")
Object.toString = function() {
    console.log(111)
}
console.log(person)
