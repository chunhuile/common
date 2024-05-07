## es6面试题1
1、 ES6 新增特性
新增了块级作用域(let,const)

提供了定义类的语法糖(class)

新增了一种基本数据类型(Symbol)

新增了变量的解构赋值

函数参数允许设置默认值，引入了 rest 参数，新增了箭头函数

数组新增了一些 API，如 isArray / from / of 方法;数组实例新增了entries()，keys() 和 values() 等方法

对象和数组新增了扩展运算符

ES6 新增了模块化(import/export)

ES6 新增了 Set 和 Map 数据结构

ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例

ES6 新增了生成器(Generator)和遍历器(Iterator)

2、require与import的区别和使用(CommonJS规范和es6规范)
1、import是ES6中的语法标准也是用来加载模块文件的，import函数可以读取并执行一个JavaScript文件，然后返回该模块的export命令指定输出的代码。export与export default均可用于导出常量、函数、文件、模块，export可以有多个，export default只能有一个。

2、require 定义模块：module变量代表当前模块，它的exports属性是对外的接口。通过exports可以将模块从模块中导出，其他文件加载该模块实际上就是读取module.exports变量，他们可以是变量、函数、对象等。在node中如果用exports进行导出的话系统会系统帮您转成module.exports的，只是导出需要定义导出名。

require与import的区别

1，require是CommonJS规范的模块化语法，import是ECMAScript 6规范的模块化语法；

2，require是运行时加载，import是编译时加载；

3，require可以写在代码的任意位置，import只能写在文件的最顶端且不可在条件语句或函数作用域中使用；

4，require通过module.exports导出的值就不能再变化，import通过export导出的值可以改变；

5；require通过module.exports导出的是exports对象，import通过export导出是指定输出的代码；

6，require运行时才引入模块的属性所以性能相对较低，import编译时引入模块的属性所所以性能稍高。

3、箭头函数
js中我们在调⽤函数的时候经常会遇到this作⽤域的问题，这个时候ES6给我们提箭头函数。

1、 箭头函数是匿名函数不能作为构造函数，不能使用new

2、 箭头函数不绑定arguments,取而代之用rest参数…解决，

3、 this指向不同,箭头函数的this在定义的时候继承自外层第一个普通函数的this

4、 箭头函数通过call()或apply()调用一个函数,只传入了一个参数,对this并没有影响.

5、 箭头函数没有prototype(原型)，所以箭头函数本身没有this

6、 箭头函数不能当做Generator函数,不能使用yield关键字、

7、 写法不同，箭头函数把function省略掉了 （）=> 也可以吧return 省略调 写法更简洁

8、箭头函数不能通过call（）、apply（）、bind（）方法直接修改它的this指向。

4、简述 let const var 的区别 以及使用场景
var let 是用来声明变量的，而const是声明常量的 var
1.var声明的变量存在变量提升，即变量可以在声明之前调用，值为undefined ​   
2、一个变量可多次声明，后面的声明会覆盖前面的声明 ​   
3、在函数中使用var声明变量的时候，该变量是局部的作用域只在函数内部，而如果在函数外部使用 var，该变量是全局的
let
1、不存在变量提升，let声明变量前，该变量不能使用。就是 let 声明存在暂时性死区 ​      
2、let命令所在的代码块内有效，在块级作用域内有效，作用域只是在花括号里面 ​      
3、let不允许在相同作用域中重复声明，注意是相同作用域，不同作用域有重复声明不会报错
const
1、const声明一个只读的常量，声明后，值就不能改变 ​     
2、let和const在同一作用域不允许重复声明变量const声明一个只读的常量。一旦声明，常量的值就不能改变，但对于对象和数据这种  引用类型，内存地址不能修改，可以修改里面的值。 ​   
3、let和const不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错 
4、能用const的情况下尽量使用const，大多数情况使用let，避免使用var。 const > let > var const声明的好处，一让阅读代码的人知道该变量不可修改，二是防止在修改代码的过程中无意中修改了该变量导致报错，减少bug的产生

5、map和forEach的区别
相同点

都是循环遍历数组中的每一项 forEach和map方法里每次执行匿名函数都支持3个参数，参数分别是item（当前每一项）、index（索引值）、arr（原数组），需要用哪个的时候就写哪个 匿名函数中的this都是指向window 只能遍历数组

注意：forEach对于空数组是不会调用回调函数的。

不同点

map方法返回一个新的数组，数组中的元素为原始数组调用函数处理后的值。(原数组进行处理之后对应的一个新的数组。) map()方法不会改变原始数组 map()方法不会对空数组进行检测 forEach()方法用于调用数组的每个元素，将元素传给回调函数.(没有return，返回值是undefined）

6、promise的解释
1、Promise 是异步编程的一种解决方案，主要用于异步计算，支持链式调用，可以解决回调地狱 的问题，自己身上有all、reject、resolve、race 等方法，原型上有then、catch等方法。

2、可以将异步操作队列化，按照期望的顺序执行，返回符合预期的结果，可以在对象之间传递和操作 promise，帮助我们处理队列

3、promise 有三个状态：pending[待定]初始状态，fulfilled[实现]操作成功，rejected[被否决]操作失败

4、Promise 对象状态改变：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了

5、如果不设置回调函数，Promise内部抛出的错误，不会反应到外部，但是写了then 和 catch ，会被then的第二个参数 或 catch所捕获

promise 的 then 为什么可以支持链式调用
promise 的then会返回一个新的 promise 对象，能保证 then 方 可以进行链式调用

补充：

Promise.all哪怕一个请求失败了也能得到其余正确的请求结果的解决方案
Promise.all默认只要有一个错误就直接返回错误。promise.all中任何一个promise 出现错误的时候都会执行reject，导致其它正常返回的数据也无法使用
Promise.all(
  [
    Promise.reject({ code: 500, msg: "服务异常" }),
    Promise.resolve({ code: 200, list: [] }),
    Promise.resolve({ code: 200, list: [] })
  ].map(p => p.catch(e => e))
)
  .then(res => {
    console.log("res=>", res);
  })
  .catch(error => {
    console.log("error=>", error);
  });
res=> [ { code: 500, msg: '服务异常' },
  { code: 200, list: [] },
  { code: 200, list: [] } ]
核心内容是map方法，map的每一项都是promise，catch方法返回值会被promise.reslove()包裹，这样传进promise.all的数据都是resolved状态的。
 
// 使用Promise.all 其中id为69的商品,返回失败,会导致整个Promise接受到reject状态.
// 所以进行改造, p catch 得到的err  为返回失败抛出的信息, 进行置空
.map(p => p.catch(err => '')))

6、async、await的原理
Async 和 await 是一种同步的写法，但还是异步的操作，两个必须配合一起使用

函数前面的async关键字，表明该函数内部有异步操作。调用该函数时，会立即返回一个Promise对象。

await 是个运算符，用于组成表达式，await 表达式的运算结果取决于它等的东西，如果是promise则会等待promaise 返回结果，接普通函数直接进行链式调用.

await 能够获取promise执行的结果 await必须和async一起使用才行，async配合await使用是一个阻塞的异步方法

如果await后面不是Promise对象, 就直接返回对应的值，只能在async函数中出现, 普通函数直接使用会报错

await语句后的Promise对象变成reject状态时，那么整个async函数会中断，后面的程序不会继续执行

使用场景：

我在项目中： 需求：执行第一步，将执行第一步的结果返回给第二步使用。在ajax中先拿到一个接口的返回数据，然后使用第一步返回的数据执行第 二步操作的接口调用，达到异步操作。

7、解构赋值
ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构赋值

常见的几种方式有

1.默认值

2.交换变量

3.将剩余数组赋给一个变量

结构数组和对象字符串区别

对象的解构与数组类似，但有所不同。数组的元素是按次序排列的，变量的取值由它的位置决定；

而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。字符串也是可以解构赋值的。字符串被转换成了一个类似数组的对象.

我在项目中：就是从目标对象或数组中提取自己想要的变量。最常用的场景是：element-ui,vant-ui按需引入，请求接口返回数据，提取想要数据。

8、 for...in 迭代和 for...of 有什么区别
1、 推荐在循环对象属性的时候，使用 for...in,在遍历数组的时候的时候使用for...of。

2、 for in遍历的是数组的索引，而for of遍历的是数组元素值

3、for...of 不能循环普通的对象，需要通过和 Object.keys()搭配使用

4、for...in 遍历顺序以数字为先 无法遍历 symbol 属性 可以遍历到公有中可枚举的

5、从遍历对象的角度来说，for···in会遍历出来的为对象的key，但for···of会直接报错。

9、 generator 有了解过吗？
Generator 生成器 也是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同 function *（）{}

Generator 函数是一个状态机，封装了多个内部状态，除了状态机，还是一个遍历器对象生成函数。

Generator 是分段执行的, yield （又得）可暂停，next方法可启动。每次返回的是yield后的表达式结果，这使得Generator函数非常适合将异步任务同步化

Generator 并不是为异步而设计出来的，它还有其他功能（对象迭代、控制输出、部署Interator`接口…）

Generator函数返回Iterator对象，因此我们还可以通过for...of进行遍历,原生对象没有遍历接口，通过Generator函数为它加上这个接口，就能使用for...of进行遍历了

promise、Generator、async/await进行比较：

promise和async/await是专门用于处理异步操作的
Generator并不是为异步而设计出来的，它还有其他功能（对象迭代、控制输出、部署Interator接口…）
promise编写代码相比Generator、async更为复杂化，且可读性也稍差
Generator、async需要与promise对象搭配处理异步情况
async实质是Generator的语法糖，相当于会自动执行Generator函数
async使用上更为简洁，将异步代码以同步的形式进行编写，是处理异步编程的最终方案

10、js构造函数的静态成员和实例成员
js的构造函数（在别的后台语言上叫做类）上可以添加一些成员，可以在构造函数内部的this上添加，可以在构造函数本身上添加，通过这两种方式添加的成员，就分别称为实例成员和静态成员

实例成员:构造函数中this上添加的成员 静态成员：构造函数本身上添加的成员

实例成员，只能由实例化的对象来访问 静态成员，只能由构造函数本身来访问 实例化对象的proto指向构造函数的prototype属性指向的对象，实例化的对象可以访问到它后者身上的成员

构造函数生成实例的执行过程：使用面向对象编程时,new关键字做了什么？

新建了一个Object对象

修改构造函数this的指向，是其指向新建的Object对象，并且执行构造函数

为Object对象添加了一个proto属性，是其指向构造函数的prototype属性

将这个Object对象返回出去

11、set和map数据结构有哪些常用的属性和方法？
set数据的特点是数据是唯一的

const set1 = new Set()
 
增加元素 使用 add
set2.add(4)
 
是否含有某个元素 使用 has
console.log(set2.has(2)) 
 
查看长度 使用 size
console.log(set2.size) 
 
删除元素 使用 delete
set2.delete(2)
 
size: 返回Set实例的成员总数。
add(value)：添加某个值，返回 Set 结构本身。
delete(value)：删除某个值。
clear()：清除所有成员，没有返回值。

Set的不重复性

传入的数组中有重复项，会自动去重
const set2 = new Set([1, 2, '123', 3, 3, '123'])
 
Set`的不重复性中，要注意`引用数据类型和NaN
两个对象都是不用的指针，所以没法去重
const set1 = new Set([1, {name: '孙志豪'}, 2, {name: '孙志豪'}])
 
如果是两个对象是同一指针，则能去重
const obj = {name: '我们一样'}
const set2 = new Set([1, obj, 2, obj])
 
NaN !== NaN，NaN是自身不等于自身的，但是在Set中他还是会被去重
const set = new Set([1, NaN, 1, NaN])
map数据结构

Map`对比`object`最大的好处就是，key不受`类型限制

 
定义map
const map1 = new Map()
 
新增键值对 使用 set(key, value)
map1.set(true, 1)
 
判断map是否含有某个key 使用 has(key)
console.log(map1.has('哈哈')) 
 
获取map中某个key对应的value
console.log(map1.get(true)) 
 
删除map中某个键值对 使用 delete(key)
map1.delete('哈哈')
 
 
定义map，也可传入键值对数组集合
const map2 = new Map([[true, 1], [1, 2], ['哈哈', '嘻嘻嘻']])
console.log(map2) // Map(3) { true => 1, 1 => 2, '哈哈' => '嘻嘻嘻' }

12、proxy 的理解
Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

13、Es6中新的数据类型symbol
symbol 是es6 加入的，是一个基本数据类型，它代表的是一个独一无二的值，SYMBOL 值是由 SYMBOL函数生成，也就是说现在我们定义对象的属性名字可以是原有的字符串 也可以是 symbol 类型的，symbol 可以保证不与其他属性名冲突，减少了bug的产生，

如果那 symbol 对比的话 就是会返回 false

symbol 他是一个原始类型的值就，不可以使用 new 关键字，symbol不是对象 没有迭代器的接口 不能去添加属性值，他是类似于字符串的一种类型

symbol 不能用来四则运算，否则会报错，只能用显示的方式转为字符串

symbol 参数里的 a 表示一种修饰符 对当前创建的 symbol 的一种修饰，作为区分 ，否则会混淆

14、iterator == iteration （遍历器的概念）
遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作

Iterator 的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。

其实iteration == iterator 有三个作用：

为各种数据结构，提供一个统一的、简便的访问接口；

使得数据结构的成员能够按某种次序排列；

主要供for...of消费

15、Object.assign
Object.assign可以实现对象的合并。它的语法是这样的： Object.assign(target, ...sources)

Object.assign会将source里面的可枚举属性复制到target。如果和target的已有属性重名，则会覆盖。同时后续的source会覆盖前面的source的同名属性。

Object.assign复制的是属性值，如果属性值是一个引用类型，那么复制的其实是引用地址，就会存在引用共享的问题

Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。

那么什么是类数组对象呢？所谓类数组对象，最基本的要求就是具有length属性的对象。

1、将类数组对象转换为真正数组：

let arrayLike = {
    0: 'tom', 
    1: '65',
    2: '男',
    3: ['jane','john','Mary'],
    'length': 4
}
let arr = Array.from(arrayLike)
console.log(arr) // ['tom','65','男',['jane','john','Mary']]
那么，如果将上面代码中 length 属性去掉呢？实践证明，答案会是一个长度为0的空数组。

这里将代码再改一下，就是具有 length 属性，但是对象的属性名不再是数字类型的，而是其他字符串型的，代码如下：

let arrayLike = {
    'name': 'tom', 
    'age': '65',
    'sex': '男',
    'friends': ['jane','john','Mary'],
    length: 4
}
let arr = Array.from(arrayLike)
console.log(arr)  // [ undefined, undefined, undefined, undefined ]
会发现结果是长度为4，元素均为 undefined 的数组

由此可见，要将一个类数组对象转换为一个真正的数组，必须具备以下条件：

1、该类数组对象必须具有 length 属性，用于指定数组的长度。如果没有 length 属性，那么转换后的数组是一个空数组。

2、该类数组对象的属性名必须为数值型或字符串型的数字

16、谈谈你对模块化开发的理解？
我对模块的理解是，一个模块是实现一个特定功能的一组方法。在最开始的时候，js 只实现一些简单的功能，所以并没有模块的概念 ，但随着程序越来越复杂，代码的模块化开发变得越来越重要。

由于函数具有独立作用域的特点，最原始的写法是使用函数来作为模块，几个函数作为一个模块，但是这种方式容易造成全局变量的污 染，并且模块间没有联系。

后面提出了对象写法，通过将函数作为一个对象的方法来实现，这样解决了直接使用函数作为模块的一些缺点，但是这种办法会暴露所 有的所有的模块成员，外部代码可以修改内部属性的值。

现在最常用的是立即执行函数的写法，通过利用闭包来实现模块私有作用域的建立，同时不会对全局作用域造成污染。

17、js 的几种模块规范？
js 中现在比较成熟的有四种模块加载方案：

第一种是 CommonJS 方案，它通过 require 来引入模块，通过 module.exports 定义模块的输出接口。这种模块加载方案是服务器端的解决方案，它是以同步的方式来引入模块的，因为在服务端文件都存储在本地磁盘，所以读取非常快，所以以同步的方式加载没有问题。但如果是在浏览器端，由于模块的加载是使用网络请求，因此使用异步加载的方式更加合适。

第二种是 AMD 方案，这种方案采用异步加载的方式来加载模块，模块的加载不影响后面语句的执行，所有依赖这个模块的语句都定义在一个回调函数里，等到加载完成后再执行回调函数。require.js 实现了 AMD 规范。

第三种是 CMD 方案，这种方案和 AMD 方案都是为了解决异步模块加载的问题，sea.js 实现了 CMD 规范。它和require.js的区别在于模块定义时对依赖的处理不同和对依赖模块的执行时机的处理不同。

第四种方案是 ES6 提出的方案，使用 import 和 export 的形式来导入导出模块。

