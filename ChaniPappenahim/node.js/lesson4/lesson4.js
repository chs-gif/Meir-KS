console.log("chani")
import express from 'express'

const ser = express()

ser.use(express.json())
let list = [{
    id: '205',
    name: 'Sara Cohen',
    age: 17,
    class: 'יא'
}, {
    id: '654',
    name: 'Chava Levi',
    age: 15,
    class: 'ט'
}, {
    id: '935',
    name: 'Ruth Katz',
    age: 18,
    class: 'יב'
}, {
    id: '156',
    name: 'Rivka Lev',
    age: 20,
    class: 'יד'
}]

ser.get('/list', (req, res) => {
    res.json(list)
})
server.get('/list/:id', (req, res) => {
    const f = undefined;
    f.age
    res.json(students.find(s => s.id === req.params.id))
    res.list(200)
})

server.delete('/list/:id', (req, res) => {
    const id = req.params.id
    list = list.filter(s => s.id !== id)
    res.status(200)
    res.send('list deleted')
})

server.put('/list/:id', (req, res) => {
    const body = req.body
    const index = list.findIndex(s => s.id === req.params.id)
    list[index] = body
    res.send('list updated')
})

server.post('/list', (req, res) => {
    const body = req.body
    list.push(body)
    res.send('list updated')
})