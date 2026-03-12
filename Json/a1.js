const obj = require('./P.json')
console.log(obj)
console.log(obj.name)
console.log(obj['age'])
document.write('I am '+obj.name)
document.write('My age is '+obj['age'])
// referrence error document is not defined