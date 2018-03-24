/**
 * Practiced by dongxuteng on 2018/3/24.
 */


 //ES5 中没有块作用域
{
    var a = 20;
}
console.log("大括号外依然能访问到a:",a);

for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out of for ",i);//报错么，输出啥？

if(true){
    var a = 20;
}
console.log(a);