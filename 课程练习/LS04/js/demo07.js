/**
 * Practiced by dongxuteng on 2018/3/24.
 */
var str = "abc";
function  sloppyFunc() {
    str.length = 7;
    //console.log(Object.getOwnPropertyDescriptor(str,"length"));
    console.log(str.length);//
}
sloppyFunc();        //  3       函数体内相当于是临时包装对象  不影响其本身的值

                                    //严格模式下禁止删除不可改变的属性和未定义的变量
function  strictFunc() {                
    'use strict';
    str.length = 7;
    console.log(str.length);
}
strictFunc();//报错

//严格模式下禁止删除未定义的变量
delete foo;
delete window.foo;
'use strict';
delete foo;
delete window.foo;

//严格模式下禁止函数参数重名
/*
function f(a, a, b) {
    return a+b;
}
f(2,3,4);//非严格模式下正常执行 7

"use strict";
function f(a, a, b) {
    return a+b;
}
f(2,3,4);//严格模式下报错
*/