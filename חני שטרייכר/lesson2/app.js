// הדרך הישנה
// { add, less }
// const math = require('./modules/math')
// הדרך החדשה
import { add } from './modules/math/index.js'
// מטפל בקבצים
import fs from 'fs'
// מטפל בניתוב (url)
import path from 'path'
//נותן מידע על מערכת ההפעלה
import os from 'os'
// מאפשר ליצור אירועים מותאמים אישית
import EventEmitter from 'events'

// מקבל את מה שמוגדר כdefault בקובץ הזה
//import D from './modules/math/math.js'

console.log(add(7, 5)) 
fs.writeFileSync('file.txt', 'Hello')

path.join('/rr');

os.platform()






