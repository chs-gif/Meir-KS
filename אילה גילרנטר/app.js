import fs from 'fs'
let text='{"fname":"elisheva","lname":"kerbel"}'
fs.writeFile('myfile.json',text,(err)=>{
    if(err)
        console.log("err: ",err)
    else
      fs.readFile('myfile.json','utf8',(err,data)=>{
       if(err)
          console.log("err: ",err)
           else   
          {
            console.log("data: ",data)
            let jsonData=JSON.parse(data)
            jsonData.fname2="chani"
            fs.writeFileSync('myfile.json', JSON.stringify(jsonData, null, 2))

          }
        
      
    })
})
