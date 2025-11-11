import fs from 'fs';
fs.writeFileSync('lesson.json', JSON.stringify({"name":"rachel","last name":"levi"}));
const data=fs.readFileSync('lesson.json','utf8')
console.log(JSON.parse( data).name)