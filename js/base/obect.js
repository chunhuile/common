/**
 * @file 该文件用于描述object的方法 
*/

Object.is() //是一种判断两个值是否相同的方法。
// 语法：Object.is(value1, value2);
// 参数：value1：要比较的第一个值。value2：要比较的第二个值。
// 返回值：一个布尔表达式，指示两个参数是否具有相同的值。
 
Object.assign() //方法用于将所有可枚举的自身属性从一个或多个源对象复制到目标对象。
// 语法：Object.assign(target, ...sources)
// 参数：target：目标对象——应用源属性的对象，修改后返回。sources：源对象——包含你要应用的属性的对象。
// 返回值：修改后的目标对象。
 
 
Object.entries() //ES8的Object.entries是把对象转成键值对数组， [key, value] 对的数组。
// 语法：Object.entries(obj)
// 参数：obj：要返回其自己的可枚举字符串键属性 [key, value] 对的对象。返回值：给定对象自己的可枚举字符串键属性 [key, value] 对的数组。
// Object.fromEntries则相反，是把键值对数组转为对象
 
Object.values()// 方法返回给定对象自己的可枚举属性值的数组，其顺序与 for...in 循环提供的顺序相同。
// 语法：Object.values(obj)
// 参数：obj：要返回其可枚举自身属性值的对象。返回值：包含给定对象自己的可枚举属性值的数组。
 
Object.prototype.hasOwnProperty()
hasOwnProperty() //方法返回一个布尔值，指示对象是否具有指定的属性作为它自己的属性。
// 如果指定的属性是对象的直接属性，则该方法返回 true — 即使值为 null 或未定义。如果该属性是继承的或根本没有声明，则返回 false。
// 语法：hasOwnProperty(prop)
// 参数：prop：要测试的属性的字符串名称或符号。
// 返回值：如果对象将指定的属性作为自己的属性，则返回true；否则为false。
 
Object.keys()
Object.keys() //方法用于返回给定对象自己的可枚举属性名称的数组，以与普通循环相同的顺序迭代。
// 语法：Object.keys(obj)
// 参数：obj：要返回可枚举自身属性的对象。
// 返回值：表示给定对象的所有可枚举属性的字符串数组。
 
Object.prototype.toString()
toString() //方法返回一个表示对象的字符串。当对象将被表示为文本值或以期望字符串的方式引用对象时，将自动调用此方法 id。默认情况下，toString() 方法由从 Object 继承的每个对象继承。
// 语法：toString()
// 返回值：表示对象的字符串。
 
Object.freeze()
Object.freeze()// 方法冻结一个对象，这意味着它不能再被更改。冻结对象可防止向其添加新属性，防止删除现有属性，防止更改现有属性的可枚举性、可配置性或可写性，并防止更改现有属性的值。它还可以防止其原型被更改。
// 语法：Object.freeze(obj)
// 参数：obj：要冻结的对象。返回值：传递给函数的对象。
 
Object.create()//方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 （请打开浏览器控制台以查看运行结果。）
// 语法：const me = Object.create(person);
// 参数：
// proto：新创建对象的原型对象。
propertiesObject
// 可选。需要传入一个对象，该对象的属性类型参照Object.defineProperties()的第二个参数。如果该参数被指定且不为 undefined，该传入对象的自有可枚举属性(即其自身定义的属性，而不是其原型链上的枚举属性)将为新创建的对象添加指定的属性值和对应的属性描述符。
// 返回值
// 一个新对象，带着指定的原型对象和属性。