/**
 * Practiced by dongxuteng on 2018/3/20.
 */



var a = [1,2,3];
var b = a;
console.log(a,b);
b.pop();
console.log(a,b);
b = [4,5,6];
console.log(a,b);

function foo(x) {
    x.push(4);
    x = [5,6,7];
    x.push(8);
    //console.log(x);
}
var a = [1,2,3];
foo(a);
console.log(a);


function foo(x) {
    x.push(4);
    //console.log(x);
    x.length = 0;
    x.push(5,6,7,8);
    //console.log(x);
}
var a = [1,2,3];
foo(a);
console.log(a);


{
    foo:max(2,3)
}

// 存在二义性的语句 补充一
var max = function (x,y) {
    return x>y?x:y;
};
var x = {
    foo:max(2,3)
}

// 存在二义性的语句 补充二
var max = function (x,y) {
    return x>y?x:y;
};
{
    console.log(123);
    console.log(456);
    foo:max(2,3)
}