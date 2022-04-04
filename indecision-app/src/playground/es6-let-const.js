var nameVar = 'Cagri'
var nameVar = 'Hakan'
console.log('nameVar', nameVar)

let nameLet = 'Hande'
// let nameLet = 'Nermin'   //cannot redefined
nameLet = 'Nermin'
console.log('nameLet', nameLet)

const nameConst = 'Lokman'
// nameConst = 'Nil'    //cannot redefined and reassigned
console.log('nameConst', nameConst)

// Block Scoping

var fullName = 'Cagri Orskaya'

if (fullName) {
  var firstName = fullName.split(' ')[0]
  let secondName = fullName.split(' ')[1]
}

console.log(firstName) // prints Cagri
// console.log(secondName) // throws error