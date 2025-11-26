setTimeout(()=>{
    console.log("first")
},1000);
let now1=new Date();
let nowPlus=now1
nowPlus.setMilliseconds(now1.getMinutes()+2000)
while(now1!=nowPlus){
    now1=new Date();
}
console.log("???");