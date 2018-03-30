/**
 * Practiced by dongxuteng on 2018/3/27.
 */

function foo(){}
console.log(foo); //   foo{}
console.log(typeof foo); //  function
console.log(foo instanceof Object); //   true
console.log(foo instanceof Function); //   true
console.log(foo === window.foo); //  true


console.log(typeof Function);//function   这几个都是JS中自带的内置函数
console.log(typeof Array);	 //function    但这是函数对象
console.log(typeof Date);	 //function
console.log(typeof Error); 	 //function
console.log(typeof Math);	 //Object      这是非函数对象
console.log(typeof JSON);	 //Object


console.log(typeof new Function());// function 
console.log(typeof new Array());	 //  object
console.log(typeof new Date());	 //  object


console.log(Function instanceof Function); //true
console.log(Function instanceof Object);  // true

console.log(Array instanceof Function);   //true
console.log(Array instanceof Object);  //true

console.log(Date instanceof Function);  //true
console.log(Date instanceof Object);   //true

console.log(Math instanceof Function);   //false
console.log(Math instanceof Object);   //true

console.log(JSON instanceof Function);   //false 
console.log(JSON instanceof Object);    //true