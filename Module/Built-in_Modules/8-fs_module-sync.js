//same as:
// const fs = require('fs')
// fs.read
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('../first.txt','utf8')
const second = readFileSync('../second.txt','utf8')

console.log(first, second)

writeFileSync('../result-sync.txt', 
    `Here is the result: ${first}${second}`, 
    {flag: 'a'}
)
//'w' → write (default). Creates the file (if it doesn’t exist) or overwrites it (if it does).
//'a+' → append & read. Opens the file for reading and appending.
//'w+' → write & read. Opens the file for reading and writing (overwrites if it exists).
//'r' → read only (fails if the file doesn’t exist).
