const path = require('path')

console.log(path.join(__dirname, 'data', 'file.txt'))

console.log(path.basename(__filename))
console.log(path.extname(__filename))
