/**
 * Practiced by dongxuteng on 2017/3/13.
 */

 //对象类型 简述
var obj = {x:1,y:2};//obj的原型是Object.prototype,并且obj继承的属性和方法都源于这个原型
console.log(obj.__proto__ === Object.prototype);
console.log(Object.prototype);

var arr = [1,2,3,4,5];//arr的原型是Array.prototype,并且arr继承的属性和方法都源于这个原型
console.log(arr.__proto__ === Array.prototype);
console.log(Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);

function foo() { //foo的原型是Function.prototype,并且foo继承的属性和方法都源于这个原型
    console.log("foo function!");
};
console.log(foo.__proto__ === Function.prototype);
console.log(foo.__proto__.__proto__ === Object.prototype);

console.log(obj instanceof Object);
console.log(arr instanceof Object);
console.log(foo instanceof Object);
console.log(foo === window.foo);