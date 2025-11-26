import express from 'express'

const server = express()
server.use(express.json())

let products = [{
    id: '10',
    name: 'chair',
    weight: 53,
  
}, {
    id: '11',
    name: 'table',
    weight: 543,
 
}, {
    id: '12',
    name: 'ball',
    weight: 54,
   
}, {
    id: '13',
    name: 'car',
    weight: 5455,
  
}]

server.get('/products',(req,res)=>{
    res.json(products);
    res.status(200)
})
server.get('/products:id',(req,res)=>{
    res.json(products.find(p=>p.id===req.params.id));
    res.status(200)
})

server.put('/products/:name',(req,res)=>{
    const bodyy=req.body
    const index=products.findIndex(p=>p.name===req.params.name)
    product[index]=bodyy
    res.send("you've just updated the data")
})

server.delete('/products:name',(req,res)=>{
 product=product.filter(p=>p.name!==req.params.name)
 res.status(200)
 res.send("the product was deleted")

})

server.post('/products',(req,res)=>{
    product.push(req.body)
    res.send("the product was added")
})

server.listen(7000, () => {
    console.log('server running on https://localhost:7000')
})