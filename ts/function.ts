/**
 * @file 该文件用于解释ts中的函数
 * 函数是应用程序的基础，帮助我们实现抽象层，模拟层，信息隐藏层和模块
 * 在ts中，已经支持类、命名空间、和模块，但是函数仍然是主要定义行为的方式
*/

/**
 * 使用方式
*/
const add = (a:number,b:number) => a + b;

/**
 * 可选参数
*/
const sum = (a:number,b?:number) => a +( b ? b:0)

/**
 * 剩余参数
*/

const sum = (a:number,...rest:number[]) => rest.reduce(((a,b) => a + b), a)

//函数重载