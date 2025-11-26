import express from 'express'

let a=express()
a.use(express.json())
let colors=[
    {
        id:1,
        name:'red'
    },
    {
        id:2,
        name:'blue'
    },
    {
        id:3,
        name:'yellow'
    }
]
a.get('/colors',(req,res)=>{
    console.log(colors.length)
    console.log('on all colors')
    res.json(colors)
    res.status(200)
})

a.get('/colors/:id',(req,res)=>{
    console.log('color by id')
    let id=req.params.id
    res.json(colors.filter(c=>c.id==id))
    res.status(200)
})

a.post('/addcolor/:color', (req, res) => {
    console.log('here')
    const colorName = req.params.color;
    
    if (!colorName) {
        return res.status(400).json({ error: 'Color parameter is required' });
    }
    
    const colorObject = { id: colors.length+1, name: colorName };
    colors.push(colorObject)
    res.status(200).json(colorObject);
    console.log("Added color:", colorName);
});

a.put('/changecolor/:id/:color',(req,res)=>{
    let id=req.params.id
    let color=req.params.color
    const colorObj = colors.find(c => c.id == id);
    colorObj.name=color
    res.status(200).json(colorObj)
})

a.post('/addcolorbody',(req,res)=>
{
    let data=req.body
    colors.push(data)
    res.status(200).json(data)
})

a.delete('/delcolor/:id',(req,res)=>{
    let id=req.params.id
    colors=colors.filter(c=>c.id!=id)
    res.status(200).json(colors)
})

a.listen(7000,()=>{
    console.log('server runnint 7000...')
})
