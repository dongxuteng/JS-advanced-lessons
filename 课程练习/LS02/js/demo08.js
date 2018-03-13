/**
 * Practiced by dongxuteng on 2017/3/13.
 */

a;
console.log(a);   //undeclare    这个会报错
                        //分清未定义与未声明的区别 undefined与 undeclare
var a;
console.log(a);     //undefined    


function foo(x,y) {
    console.log(x,y);// undefined
}
foo(1); 

function fee() {
    //没有返回值的情况
}
var feeReturnValue = fee();
console.log(feeReturnValue);//undefined


//null 需要注意的一点
console.log(typeof null);//object