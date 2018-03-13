/**
 * Practiced by dongxuteng on 2017/3/13.
 */



var a = 3;
var b = 4;
console.log(typeof (a>b),a>b);
console.log(typeof (a==b),a==b);
console.log(typeof (a<b),a<b);

//算数运算符 与 隐式类型转换 + -
var c = "img" + 3 +".jpg";
var d = "23" - 5;
console.log(c,d);

//逻辑运算符 与 隐式类型转换 + -
var e = !23;
var f = !!34;  
var m = !!"";  //false
var n = !!0;   //false 
var o = !!"abs";   //true
var p = !!undefined;  //false
var q = !!null;   //false
var g = !!{};
console.log(e,f,g,m,n,o,p,q);

// 流程语句 与 隐式类型转换
var h = {x:1};
//var h = "";
if(h){
    console.log("h:",h);
}




//toString()、toFixed()、toPrecision()、toExponential()