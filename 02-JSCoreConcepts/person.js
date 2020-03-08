class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
   
sayHi() {
    console.log(`${this.name} ${this.surname.toUpperCase()}`);
}

getInitials() {
    let first = this.name.charAt(0);
    let last = this.surname.charAt(0);
    console.log(`${first}.${last}.`);
}

}

let person = new Person("Jan", "Nowak");
let person2 = new Person("Mariola", "Sosnowska");

person.sayHi();
person2.sayHi();
person.getInitials();
person2.getInitials();