/**
 * Practiced by dongxuteng on 2017/3/13.
 */


 //包装对象
var a = 123;
var b = new Number(a);

console.log(a == b);  //  true             
console.log(a === b);//false           进行了隐式类型转换 对象类型转换成了Number类型umber

//临时包装对象                            
var str = "abcde"; 
console.log(str.length);//5 临时包装成了String对象  原本是基本数据String类型  临时包装成了String对象类型 所以其有了属性和方法
str.length = 1;
console.log(str.length,str);//5     "abcde" 临时包装对象并不影响原始值   执行完就自动释放了 不影响原来的值
                                     
var arr = [1,2,3,4];                        
console.log(arr.length);//4                  
arr.length = 1;                              
console.log(arr.length,arr);//1 [1]            