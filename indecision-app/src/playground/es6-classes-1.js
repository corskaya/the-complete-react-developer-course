class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `Hi! I am ${this.name}.`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major = 'undecided') {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return this.major ? true : false
  }
  getDescription() {
    let description = super.getDescription()

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }

    return description
  }
}

const me = new Student('Cagri Orskaya', 23, 'Software Engineering')
// console.log(me.getDescription())

const other = new Student()
// console.log(other.getDescription())

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }
  getGreeting() {
    let greeting = super.getGreeting()

    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}.`
    }

    return greeting
  }
}

const hakan = new Traveler('Hakan Orskaya', 35, 'Istanbul')
console.log(hakan.getGreeting())

const hande = new Traveler('Hande Orskaya', 31)
console.log(hande.getGreeting())