import express from 'express'

const app = express()
app.use(express.json())

let products = [
    {

        id: '011',
        nameProduct: 'Milk',
        price: '7'

    }, {
        id: '012',
        nameProduct: 'Yogurt',
        price: '5'

    }, {
        id: '013',
        nameProduct: 'Cheese',
        price: '8'

    }, {
        id: '014',
        nameProduct: 'Butter',
        price: '10'

    }
]

app.get('/products', (req, res) => {
    req.json(products)
})

app.get('/products/:id', (req, res) => {
    const p = undefined
    p.price
    res.json(products.find(pro => pro.id === req.params.id))
    res.status(200)
})

app.post('/products', (req, res) => {
    const body = req.body
    products.push(body)
    req.json(products)
})

app.put('/products', (req, res) => {
    const body = req.body
    const index = products.findIndex(s => s.id === req.params.id)
    products[index] = body
    res.send('product update')

})

app.delete('/products/:id', (req, res) => {
    const id = req.params.id
    products = products.filter(s => s.id !== id)
    res.status(200)
    res.send('products deleted')
})
