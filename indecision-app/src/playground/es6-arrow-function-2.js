// 1) arguments object - no longer bound with arrow functions

// const add = function (a, b) {
//   console.log(arguments) // prints -> [Arguments] { '0': 55, '1': 1, '2': 1001 }
//   return a + b
// }
// console.log(add(55, 1, 1001))

const add = (a, b) => {
  console.log(arguments) // throws -> reference error: argument is not defined
  return a + b
}
console.log(add(55, 1, 1001))

// 2) this keyword - no longer bound

const user = {
  name: 'Cagri',
  cities: ['Istanbul', 'Ankara', 'Izmir'],
  // printPlaces() {
  //   console.log(this.name) // prints -> Cagri
  //   console.log(this.cities) // prints -> [ 'Istanbul', 'Ankara', 'Izmir' ]
  // }
  printPlaces: () => {
    console.log(this.name) // throws -> type error: cannot read prop of undefined
    console.log(this.cities) // throws -> type error: cannot read prop of undefined
  }
}
user.printPlaces()

// Challenge Area
//
// numbers - array of numbers
// multiplyBy - single number
// multiply - return a new array where the number have been multiplied

const multiplier = {
  numbers: [2, 4, 8],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())