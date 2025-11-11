import fs from 'fs';

fs.readFile('lesson3.json','utf8',(err,data)=>{
    if(err)
    {
        console.log("err: ",err)
    }   
    else{
        console.log("data: ",data)
        let d=JSON.parse(data)
        d.class="י`ד"
        d.family="doitsh"
        fs.writeFileSync('lesson3.json',JSON.stringify(d,null,2))
    }
        
})
