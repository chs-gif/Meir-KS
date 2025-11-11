import fs from 'fs'
let text ='{"fname":"chani","lname":"str"}'
fs.writeFileSync('myfile.json',text);
   
            fs.readFile('myfile.json', 'utf8', (err, data) => {
            if (err)
              {console.log('error: ', err)}  
            else{
              console.log('data: ', data);
              let json1=JSON.parse(data);
              json1.street="Chazon Hish 24";
              fs.writeFileSync('myfile.json',JSON.stringify(json1));
             } 
        });
     