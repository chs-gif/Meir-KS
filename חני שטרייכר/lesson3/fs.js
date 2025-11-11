import fs from 'fs'

fs.writeFileSync('data.txt', 'Hello')
fs.appendFileSync('data.txt', ' from node!')

const data = fs.readFileSync('data.txt', 'utf8')
console.log('data: ', data)

console.log('after sync actions')

let data2;

fs.writeFile('note.txt', 'Hello from async', (err)=> {
    if (err)
        console.log('error: ', err)
    else
        fs.readFile('note.txt', 'utf8', (err, data) => {
            if (err)
                console.log('error: ', err)
            else
              console.log('data: ', data)
        })
})



console.log('after async action')

fs.rename('data.txt', 'data.pdf', err => {
    if (err)
        console.log('error: ', err)
    else
    console.log('rename success!')

})

fs.unlinkSync('note.txt')