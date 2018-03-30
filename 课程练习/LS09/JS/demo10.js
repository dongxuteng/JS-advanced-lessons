/**
 * Practiced by dongxuteng on 2018/3/30.
 */

if(true){
    var i = 0;
}

function foo(){
    console.log("j:",j);//undefined
    var j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错

//上边代码等价于
var i;
if(true){
    i = 0;
}

function foo(){
    var j;                              //此时  j为局部变量  当函数执行结束后   这个变量所占的内存会自动释放掉
    console.log("j:",j);//undefined
    j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错