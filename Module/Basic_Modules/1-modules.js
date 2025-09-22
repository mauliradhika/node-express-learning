//CommonJS, every file is module (by default)
//MODULES - Encapsulated Code (only share minimum)

const names = require('./2-module_exports')
console.log(names) // { john: 'john', peter: 'peter' }

const sayHi = require('./3-utils')
console.log(sayHi) // [Function: sayHi]

const data = require('./4-alternative_flavor')
console.log(data) // { singlePerson: { name: 'mauli' } }

require('./5-mind_grenade') // Sum : 15

// sayHi(john) -> error as john is not defined
//Therefore, either write names* as object or use names.john

sayHi(names.john)
sayHi(names.peter)
sayHi("susan")

//when you import a module, you actually invoke it