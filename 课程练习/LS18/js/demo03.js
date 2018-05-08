/**
 * Created by dongxuteng on 2018/5/3.
 */

var a1 = [,"abc"];
console.log(a1.length);

for(var i in a1){
    console.log(i,a1[i]);//输出几个元素
}
console.log(0 in a1,1 in a1);

var a2 = new Array(3);
console.log(a2.length);
console.log(a2);

//注意：
var a3 = [,,];
console.log(a3.length);

console.log(["a","b"].length);
console.log(["a","b",].length);
console.log(["a","b",,].length);  //  最后一个逗号后面的就不再计入长度了