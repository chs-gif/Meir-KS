import fs  from 'fs'
let text='{"fname":"brachi","lname":"lubling"}'
fs.writeFile('myfile.json',text,(err)=>{
    if(err)
        console.log("err:" ,err)
    else
        fs.readFile('myfile.json','utf8',(err,data)=>{
            if(err)
                console.log("err:" ,err)
            else
                {console.log("data:" ,data)
                    let jsonData = JSON.parse(data); 
                    jsonData.grade = "14"; 
                    fs.writeFileSync('lesson3.json', JSON.stringify(jsonData, null, 2));
                
            }
    })
})