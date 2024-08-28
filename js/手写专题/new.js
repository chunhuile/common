/**
 * @dep 手写new操作符
 * 
 * new的过程：
 * 1、创建一个新的对象obj
 * 2、新对象的原型指向constStructor.prototype() ,Object.crreat(conStructor.prorotype()) 
 * 3、执行构造函数体的内容
 * 4、返回这个对象   
 */ 

function myNew (Constructor,...args){
    var obj = Object.create(Constructor.prototype)
    Constructor.call(obj,...args)
    return obj
}