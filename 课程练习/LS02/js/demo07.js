/**
 * Practiced by dongxuteng on 2017/3/13.
 */

var str = "abc_def_ghi_jkl_mn";
str.split("_");
str.split("_",2);
str.concat("_opq");      
str.substr(4,7);
str.substring(4,7);
str.slice(2);
str.slice(2,5);
str.slice(-2);
str.slice(2,-2);
str.slice(-5,16);

str.bold();        //bold() 方法用于把字符串显示为粗体。
str.link(www.baidu.com);          //  link(url) 方法用于把字符串显示为超链接。   url	必需。规定要链接的 URL。
str.fontcolor("red");          //fontcolor() 方法用于按照指定的颜色来显示字符串。
str.fontsize(50);            //方法用于按照指定的尺寸来显示字符串。
str.big();
str.small();
str.italics();         //italics() 方法用于把字符串显示为斜体。
str.blink();             //  方法用于显示闪动的字符串。
str.fixed();                 //用于把字符串显示为打字机字体。
str.strike();               // 方法用于显示加删除线的字符串。
str.toLocaleLowerCase();              //用于把字符串转换为小写
str.toLocaleUpperCase()             //用于把字符串转换为大写
str.sub();           //方法用于把字符串显示为下标。
str.sup();            //方法用于把字符串显示为上标。