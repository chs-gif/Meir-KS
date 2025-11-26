
import fs from 'fs';

let text = '{"first_name":"chani","last_name":"pappenhaim"}';
fs.writeFileSync('lesson3.json', text);

fs.readFile('lesson3.json', 'utf8', (err, data) => {
    if (err) {
        console.log("err:", err);
    } 
    else {
        console.log("data: ", data);
        let jsonData = JSON.parse(data); 
        jsonData.grade = "14"; 
        fs.writeFileSync('lesson3.json', JSON.stringify(jsonData, null, 2));
    }
});