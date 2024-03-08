const {readFileSync, writeFileSync} = require('fs')
// const fs= require('fs')
console.log("start")
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt','utf8')

// console.log(first,`\n${second}`)

writeFileSync(
    './content/subfolder/test.txt',
"This is my text file", {flag: "a"}
)
console.log('done with this task')
console.log('starting the next task')