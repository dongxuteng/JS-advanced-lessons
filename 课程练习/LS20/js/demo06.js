/**
 * Created by dongxuteng on 2018/5/11.
 */


//分组的 反向引用
//如何将2017-10-23转成10/23/2017
"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");

//分组的 忽略分组 （？：）
"2017-10-23".replace(/(?:\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");

//注意括号的转义字符，第一个相当于做了分组
console.log(/^(ab)$/.test("(ab)"));
console.log(/^\(ab\)$/.test("(ab)"));