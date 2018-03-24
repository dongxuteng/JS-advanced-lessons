/**
 * Practiced by dongxuteng on 2018/3/24.
 */


"use stirct"
function isStrictMode() {
    return this === window?false:true;
}
//"use stirct" 
console.log(isStrictMode());