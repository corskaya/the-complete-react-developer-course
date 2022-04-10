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

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher

console.log(publisherName)
