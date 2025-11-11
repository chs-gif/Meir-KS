import fs from 'fs'
const text='{ "id":"123", "name":"shira"}'
fs.writeFile("less3.json",text,(err)=>{
    if(err)
        console.log("err:" ,err)
    else{
        fs.readFile("less3.json",(data,err)=>{
            if(err){
                console.log("err:" ,err)
            }
            else{
                fs.appendFile("less3.json","hello",(err)=>{
                    if(err){
                        console.log("err:" ,err)
                    }
                    else {
                        JSON.parse("less3.json")
                    }

                })
            }

        })
    }
})

