/**
 * Practiced by dongxuteng on 2017/3/13.
 */

 var a1=10;
 var a2=13.123;
 console.log(parseInt(a2));//如果是非数字，则先转换为字符串，然后在转成整型
console.log(parseFloat("23.456xy"));//同上，结果为23.456
//注意：parseInt和parseFloat都为全局方法，即window全局对象的方法
console.log(parseInt === window.parseInt);
console.log(parseFloat === window.parseFloat);




