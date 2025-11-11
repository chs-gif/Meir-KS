console.log('1')

setTimeout(() => {
    console.log('5')
}, 30)

setTimeout(() => {
    console.log('4')
}, 10)

let time = new Date();
let t = new Date()
t.setMilliseconds(time.getMilliseconds() + 20)
while(t.getMilliseconds() !== time.getMilliseconds()){
    time = new Date()
}
console.log('2')

setTimeout(() => {
    console.log('6')
}, 20)

time = new Date();
t = new Date()
t.setMilliseconds(time.getMilliseconds() + 30)
while(t.getMilliseconds() !== time.getMilliseconds()){
    time = new Date()
}
console.log('3')

