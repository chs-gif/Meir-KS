import fs from 'fs'
let teacher = '{"name": "noa","subject": "math"}'
fs.writeFile('myfile.json',teacher,(err)=>{
    if(err)
        console.log("err: ",err)
    else
    fs.readFile('myfile.json', 'utf8',(err,data)=>{
        if(err)
            console.log("err: ",err)
        else
        {
            console.log("data:",data)
            data = data.substring(0,data.length-1) +',"grade": "A"}'
            console.log(data)
            fs.writeFile('myfile.json',data,(err)=>{
                if(err)
                    console.log("err: ",err)
                else
                    console.log("good!")
            })
        }
    })
})
