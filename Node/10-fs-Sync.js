const {readFileSync, writeFileSync} = require('fs')
// const fs= require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,`\n${second}`)

writeFileSync(
    './content/subfolder/test.txt',
"This is my text file", {flag: "a"}
)