import express from 'express'

const server =express()
server.use(express.json())
let animals=[
    {
        "id":1,
        "name":"Dog",
        "lastReview":"1/1/2025"
    }
    ,
    {
        "id":2,
        "name":"Cat",
        "lastReview":"1/2/2025"
    },
    {
        "id":2,
        "name":"Mouse",
        "lastReview":"20/2/2025"
    },
    {
        "id":4,
        "name":"Antearter",
        "lastReview":"1/3/2025"
    },  {
        "id":5,
        "name":"Otter",
        "lastReview":"1/4/2025"
    }
]
server.get('/animals',(req,res)=>{
    res.json(animals)
})

server.get('/animals/:id',(req,res)=>{
    res.json(animals.find(a=>a.id===req.params.id))
})

server.delete('/animals/:id',(req,res)=>{
const id= req.params.id
animals=animals.filter(a=>a.id!=id)
res.status(200)
res.send("animal delete")
})

server.post('/animals',(req,res)=>{
    const body=req.body
    animals.push(body)
    res.send("animal post")
})

server.put('/animals/:id',(req,res)=>{
   const body=req.body 
   const index=animals.findIndex(a=>a.id=req.params.id)
   animals[index]=body
   res.status(200)
   res.send("animals put")
})
