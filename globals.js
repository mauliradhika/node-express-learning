//GLOBALS - NO WINDOW

// __dirname -> path to current directory
// __filename -> file name
// require -> function to use modules (CommonJS)
// module -> information about current module (file)
// process -> information about env where the program is being executed

console.log(__dirname) 
console.log(__filename)

setInterval( () => {
    console.log("Hello!!!")
}, 1000) //keeps printing in interval of 1 second

