// Object Destructuring

// const person = {
//   name: 'Cagri',
//   age: 23,
//   location: {
//     city: 'Istanbul',
//     temp: '22'
//   }
// }

// // Default value assignment
// const { name = 'Anonymous', age } = person
// console.log(`${name} is ${age}.`)

// // Renaming variables
// const { city, temp: temperature } = person.location
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName)

// Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']
console.log(`You are in ${address[1]} ${address[2]}`)

const [, city, state] = address
console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [product, small, medium, large] = item

console.log(`A medium ${product} costs ${medium}.`)