class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
		getName() {
        return this.name;
    }
}
export let person = new Person('joke', 18);
export function setPerson() {
	person = new Person('update', 19);
} 