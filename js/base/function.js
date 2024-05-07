/**
 * @file 该文件用于描述函数
*/

// 声明函数的几种方式

// 函数声明
function //函数名(参数1，参数2，...){   //要执行的语句 } 
// 函数表达式
var func2=function(b){}//函数表达式
var func3=function func4(c){}//命名式函数表达式
var func5=(function(n1,n2){})();//立即执行的函数表达式
return function(){ };//作为返回值的函数表达式
// Function构造器
var 变量名 = new Function("参数1","参数2",...,"参数n","函数体");  
// 立即执行函数
var func5=(function(n1,n2){})();//立即执行的函数表达式 ()()
// 函数声明与函数表达式的区别

// 函数声明会将那个函数提升到最前面（即使你写代码的时候在代码块最后才写这个函数），成为全局函数。

// 函数声明要指定函数名，而函数表达式不用，可以用作匿名函数。

// 函数调用的几种方式

// 1.直接调用 函数名加上括号 （）

// 2.函数表达式 变量名（）

// 函数的长度

// 函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。

function fun1(a) { }
function fun2(a, b) { }
function fun3(a, b, c) { }
function fun4(a, b, c, d) { }
function fun5(...args) { }
function fun6(a = 1, b, c, d) { }
​
console.log(fun1.length) // 1
console.log(fun2.length) // 2
console.log(fun3.length) // 3
console.log(fun4.length) // 4
console.log(fun5.length) // 0
console.log(fun6.length) // 0
