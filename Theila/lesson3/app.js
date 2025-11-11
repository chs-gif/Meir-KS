import fs from 'fs'
let text='{ "name":"tehila","age":20,"grade":14}'
fs.writeFile('a.json',text,(err)=>{
    if(err)
        console.log("errow",err)
    else
    {
        console.log(text)
        fs.readFile('a.json','utf8',(err,data)=>{
            if(err)
                console.log("errow",err)
            else
            
             fs.writeFile('a.json',data.substring(0,data.length-1)+',"last_name":"aizental"}',(err)=>{
                if(err)
                    console.log("errow",err)
                else{
                    console.log(data)
                }
             })
        })

    }

})