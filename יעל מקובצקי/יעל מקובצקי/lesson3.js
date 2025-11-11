import fs from 'fs';
let data=fs.readFileSync('file.json','utf8');
fs.writeFileSync('file.json',data+',\n{"first name":"Ayala",\n"last name":"mako"}')
console.log(fs.readFileSync('file.json','utf8'))
