/**
 * Practiced by dongxuteng on 2018/3/30.
 */


var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();// Jack


//  全局变量和局部变量
var x="a";
var f1 = function foo(){
	//var x="b";
	console.log(x);
}
f1();
console.log(x);


//若函数内未加var 则相当于创建了全局变量
var f2 = function () {
    var y = "局部";
    //y = "全局";
    console.log(y);
};
f2();               //有var y是局部变量 函数调用结束后，变量所占的内存已经被自动释放了   无var时  y是全局变量 不管函数内还是函数外都可以访问的到
console.log(y);//若函数内有var此行报错，若函数内没有var则此行输出全局变量y值


//ES5中无块作用域
if(true){
    var z = 23;
}
console.log(z);//正常输出

if(true){
    (function () { //IIFE start
        var z = 23;
    }());           //IIFE end
}
console.log(z);//报错