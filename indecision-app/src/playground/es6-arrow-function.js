function square(x) {
  return x * x
}

// const squareArrow = (x) => {
//   return x * x
// }

const squareArrow = x => x * x

console.log(square(8))
console.log(squareArrow(6))

// Challenge - Use arrow functions
//
// getFirstName('Mike Smith')
// Create regular arrow function
// Create arrow function using shorthand syntax

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0]
// }

const getFirstName = fullName => fullName.split(' ')[0]

console.log(getFirstName('Mike Smith'))