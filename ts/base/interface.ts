/**
 * @file interface 是用于定义接口,这是ts的核心原则之一。其作用是为类型敏敏和为你的代码或第三方代码定义契约
 * 
 * 注意：ts中的is关键字和interface搭配使用，用于在运行时判断一个对象是否属是某个类的实例
*/

/**
 * 接口的定义如下
*/
interface interface_name{
    currentTime:Date,
}

/**
 * 例如有一个函数，这个函数接受一个 User 对象，然后返回这个 User 对象的 name 属性:
*/
const getUserName = (user) => user.name

