
// import fs from 'fs'
// import { json } from 'stream/consumers'
// let text='{"name":"chavi_podolsky","lname":"good_luck"}'
// fs.writeFileSync('myFile.json',text) ,(err,data)=> {
//     if (err)
//         console.log('error: ', err)
//     else
//       { fs.readFile('myFile.json', 'utf8', (err, data) => {
//             if (err)
//                 console.log('error: ', err)
//             else 
//               console.log('data: ', data)
//               let json1=JSON.parse(data);
//               json1.street="chazon hish"
//               fs.writeFileSync('myFile.json',JSON.stringify(json1))
//         })
//   } 
// }
import fs from 'fs';

let text = '{"name":"chavi_podolsky","lname":"good_luck"}';
fs.writeFileSync('myFile.json', text); // כתיבת המידע לקובץ

fs.readFile('myFile.json', 'utf8', (err, data) => { // קריאה מהקובץ
    if (err) {
        console.log('error: ', err);
    } else {
        console.log('data: ', data);
        let json1 = JSON.parse(data); // המרת המידע לאובייקט JSON
        json1.street = "chazon hish"; // הוספת שדה חדש
        fs.writeFileSync('myFile.json', JSON.stringify(json1)); // כתיבת המידע המעודכן חזרה לקובץ
    }
});




// fs.readFile('myfile.json','utf8');
