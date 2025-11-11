import f from 'fs'
f.readFileSync(('lesson3.json','utf8'),(err)=>{
    if(err){
        console.log('eror:',err)
    }
    else{
        console.log('succes')
    }
})
