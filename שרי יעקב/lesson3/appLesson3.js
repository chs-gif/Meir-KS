import { error } from 'console'
import fs from 'fs'
fs.readFile('lesson3.json','utf8',(err)=>{
    if (err)
        console.log('error: ', err)
    else
        console.log('readen ')
})
