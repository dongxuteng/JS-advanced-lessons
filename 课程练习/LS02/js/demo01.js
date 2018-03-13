/*
    Practiced by dongxuteng on 2018/3/9
 */

// typeof  一般是检测基本数据类型    instanceof  用于检测引用（对象）数据类型

 console.log(typeof 123);
 console.log(typeof true);
 console.log(typeof "abcde");
 console.log(typeof null);
 console.log(typeof undefined);
 console.log(typeof {name:"xiaoming",age:20});               
 console.log(typeof function foo(){});               


 console.log(typeof Array);
console.log(typeof Function);                                  
console.log(typeof Date);                        
console.log(typeof Number);                   
console.log(typeof String);                    
console.log(typeof Boolean);   //他们的数据类型都是Function            

console                                                        
.log(typeof Math);                                             
console.log(typeof JSON);   //这两个是Object                    

//类型检测 instanceof （左侧操作数为对象，右侧操作数为原型链中的一个类型时，返回为true）
var a = {name:"Mike",age:20};
console.log(a instanceof Object);
var b = [12,34,{},""];
console.log(b instanceof Array);//思考console.log(b instanceof Object);

var Person = function(){
    //...
};
var p1 = new Person();
console.log(p1 instanceof Person);//思考console.log(p1 instanceof Object);



