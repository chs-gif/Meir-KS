import express from 'express'

const server = express()

server.use(express.json())

let students = [{
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

server.get('/students', (req, res) => {
    res.json(students)
})

server.get('/students/:id', (req, res) => {
    const f = undefined;
    f.age
    res.json(students.find(s => s.id === req.params.id))
    res.status(200)
})

server.delete('/students/:id', (req, res) => {
    const id = req.params.id
    students = students.filter(s => s.id !== id)
    res.status(200)
    res.send('Student deleted')
})

server.put('/students/:id', (req, res) => {
    const body = req.body
    const index = students.findIndex(s => s.id === req.params.id)
    students[index] = body
    res.send('Student updated')
})

server.post('/students', (req, res) => {
    const body = req.body
    students.push(body)
    res.send('Student updated')
})

server.listen(7000, () => {
    console.log('server running on https://localhost:7000')
})