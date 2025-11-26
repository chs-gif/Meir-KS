
import express from 'express'
const server=express()

server.use(express.json())

let family=[{
    id:'111',
    role:'fathGrandfatherer',
    age:'70'
},{
    id:'222',
    role:'grandmother',
    age:'68'
},{
    id:'333',
    role:'father',
    age:'40'
},{
    id:'444',
    role:'mother',
    age:'38'
},{
    id:'555',
    role:'brother',
    age:'16'
},{
    id:'666',
    role:'sister',
    age:'10'
}]

server.get('/family/:id',(rek,res)=>{
    res.json=family.find(f=>f.id===rek.params.id)
    res.status(200)
})

server.delete('/family/:id',(rek,res)=>{
    family=family.find(f=>f.id !== rek.params.id)
    res.status(200)
    const index = family.findIndex(f => f.id === req.params.id)    
    res.send('{0} deleted',family[index].role)    
})

server.put('/family/:id',(rek,res)=>{
    const details=rek.body
    const index = family.findIndex(f => f.id === req.params.id)  
    family[index]=details
    res.send('{0} updated',family[index].role)
})

server.post('/family/',(rek,res)=>{
    const details=rek.body
    family.push(details)
    res.send('person added')
})
   
server.listen(3000, () => {
    console.log('server running on https://localhost:3000')
})