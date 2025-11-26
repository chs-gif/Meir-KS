import express from 'express'
import { Server } from 'http'

const ser = express()

ser.use(express.json())

let students = [{
    id: '205',
    name: 'Sara Cohen',
    age: 17,
    class: 'יא'
}, {
    id: '654',
    name: 'Chavi Levi',
    age: 15,
    class: 'ט'
}, {
    id: '935',
    name: 'Ruti Katz',
    age: 18,
    class: 'יב'
}, {
    id: '156',
    name: 'Rivki Lev',
    age: 20,
    class: 'יד'
}]

ser.get('/students', (req, res) => {
    res.json(students)
})

Server.get('/students/:id', (req, res) => {
    const f = undefined;
    f.age
    res.json(students.find(s => s.id === req.params.id))
    res.status(200)
})

ser.delete('/students/:id', (req, res) => {
    const id = req.params.id
    students = students.filter(s => s.id !== id)
    res.status(200)
    res.send('Student deleted')
})

ser.put('/students/:id', (req, res) => {
    const body = req.body
    const index = students.findIndex(s => s.id === req.params.id)
    students[index] = body
    res.send('Student updated')
})

ser.post('/students', (req, res) => {
    const body = req.body
    students.push(body)
    res.send('Student updated')
})

