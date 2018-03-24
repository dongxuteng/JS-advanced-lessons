/**
 * Practiced by dongxuteng on 2018/3/24.
 */



function foo(){
	var a=b=3;
}
foo();
console.log("b:",b);//是否报错？输出几？为什么？  a会报错  它就相当于    var a=b；   
console.log("a:",a);//是否报错？                                b=3；   a是局部变量执行完函数自动释放了就，而b是全局的变量


//循环语句
for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out for ",i);