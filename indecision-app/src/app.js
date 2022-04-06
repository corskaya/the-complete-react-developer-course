// import './utils'

// subtract is default here, square and add are named
import subtract, { square, add } from './utils'

console.log('app.js is running')
console.log(square(2))
console.log(add(100, 23))
console.log(subtract(100, 80))

import isSenior, { isAdult, canDrink } from './person'

console.log(isAdult(15))
console.log(canDrink(36))
console.log(isSenior(63))