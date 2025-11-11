setTimeout(() => {
    console.log('2')
}, 10);

setTimeout(() => {
    console.log('4')
}, 20);

setTimeout(() => {
    console.log('5')
}, 30);
let t=new Date()
let time=new Date()
t.setMilliseconds(time.getMilliseconds()+20)
while(t.getMilliseconds()!=time.getMilliseconds()){
time=new Date()
}
console.log('1')
let ti=new Date()
let time2=new Date()
ti.setMilliseconds(time2.getMilliseconds()+20)
while(ti.getMilliseconds()!=time2.getMilliseconds()){
    time2=new Date()
}
console.log('3')
