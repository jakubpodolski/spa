class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname
  }

  toString() {
    return `${this.name} ${this.surname.toUpperCase()}`
  }

  initials() {
    return `${this.name.charAt(0)}.${this.surname.charAt(0)}.`
  }
}

let y = new Person('Jan', 'Nowak');
let x = new Person('Jakub', 'Podolski');
console.log(x.toString());
console.log(x.initials());

console.log(y.toString());
console.log(y.initials());