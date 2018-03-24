
/**
 * Practiced by dongxuteng on 2018/3/24.
 */

//  为什么函数嵌套里面的函数  this  指向的是window下的对象

var x = 45;
var test = function(){
	console.log("输出:",this.x);
}
var obj = {
	x:23
};
obj.test = test;
obj.test();
test();