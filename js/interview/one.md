 ## 69道面试题集锦，自测js掌握程度

1、underfined和null有什么区别
    同属js的7种基本属性，同属虚值，前一个为boolean，后一个为！！value
    前者是未指定特定值的变量的默认值，或没有显示返回的函数
    后者是不代表任何值。是以明确定义给变量的值
2、&&运算符能做什么
    逻辑与 且的意思，在操作函数中使用第一个虚值表达式并且返回
    类似的运算符还有if，或||    
3、||运算符能做什么
    或，在操作函数中找到第一个真值表达式并且返回
4、使用+或-或一元运算符是可以将字符串转为数字的最快方法吗
    +是最快的方法，如果已经是数字的话，则不会进行任何操作
5、dom是什么？
    dom是代表文档对象类型，是html文档的接口api。当浏览器第一次读取文档时，它会创建一个大对象。这就是dom
6、什么是事件传播
    当事件发生在dom元素上时，该事件并不完全发生在那个元素上。在冒泡阶段中，事件冒泡向上传播至父级，祖父母等，直到传播到window为止；而在捕获阶段中，事件从window开始向下触发原色或是event.target
    事件传播有三阶段：
        捕获阶段：事件从window开始。然后向下到每个元素，直到到达目标原色
        目标阶段：事件已达到目标元素
        冒泡阶段：事件从目标元素开始冒泡，然后上升，直到window
7、什么是事件冒泡
    当事件发生在dom元素上时，该事件并不完全发生在那个元素上。
8、什么是事件捕获
    当事件发生在dom元素时，该事件并不完全发生在那个元素上，在捕获阶段，事件从window开始，一直到触发事件到元素
9、event.preventDefault和event.stopPropagation()方法间有什么区别
    前者防止元素的默认行为。如果在表单元素中使用，将阻止提交。如果在锚元素中使用，将阻止导航
    后者用于捕获事件冒泡阶段中当前事件的进一步传播。
10、如何知道元素中使用了event.preventDefault()方法
    使用event.defaultPropagation()。其返回一个布尔值用来表明是否在特定元素中调用了event.preventDefault()
11、为什么此代码obj.someprop.x会引发错误
    代码如下：
        const obj = {};
        console.log(obj.someprop.x);
    解释：当我们尝试访问someprop属性中的x属性，而someprop并没有在对象中，所以值为underfined。 而underfined中没有属性x，所以访问报错
12、什么是event.target
    是发生事件的元素或 触发事件的元素
13、什么是event,currentTarget
    是在其显示附加事件处理程序的元素
14、==和===的区别
    一般比较，===严格比较
15、为什么在js中比较两个相似的对象时返回false
    代码：
        let a = { a: 1 };
        let b = { a: 1 };
        let c = a;

        console.log(a === b); // 打印 false，即使它们有相同的属性
        console.log(a === c); // true

    解释：JS 以不同的方式比较对象和基本类型。在基本类型中，JS 通过值对它们进行比较，而在对象中，JS 通过引用或存储变量的内存中的地址对它们进行比较。这就是为什么第一个console.log语句返回false，而第二个console.log语句返回true。a和c有相同的引用地址，而a和b没有。

16、!!运算符能做什么
    "!!" 运算符通常用于将一个值转换为其相应的布尔值。它的作用是将一个值转换为其对应的真（true）或假（false）
17、如何在一行中计算多个表达式的值
    使用逗号，
18、什么是提升
    是用来描述变量和函数移动到（全局或函数）顶部的术语
19、什么是作用域
    js中的作用域是指我们可以访问的变量或函数的区域。js有三种类型的作用域：全局作用域、函数作用域和块作用域（es6）
    全局作用域；在代码的任何地方都可以访问
    函数作用域：在函数中声明的变量、函数和参数可以在函数内部访问。但不能在外部访问
    块作用域：在块{}中声明的变量，比如let、const，只能在其中访问
20、什么是闭包
    略
21、js中的虚值是什么
    boolean中的false
22、如何检查值是否是虚值
    boolean函数或是！！
23、use strict是干嘛用的
    es5特性，使得我们的代码在函数或整个脚本中处于严格模式
    严格模式的一些限制：

        变量必须声明后再使用
        函数的参数不能有同名属性，否则报错
        不能使用with语句
        不能对只读属性赋值，否则报错
        不能使用前缀 0 表示八进制数，否则报错
        不能删除不可删除的属性，否则报错
        不能删除变量delete prop，会报错，只能删除属性delete global[prop]
        eval不能在它的外层作用域引入变量
        eval和arguments不能被重新赋值
        arguments不会自动反映函数参数的变化
        不能使用arguments.callee
        不能使用arguments.caller
        禁止this指向全局对象
        不能使用fn.caller和fn.arguments获取函数调用的堆栈
        增加了保留字（比如protected、static和interface）
        设立”严格模式”的目的，主要有以下几个：

        消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
        消除代码运行的一些不安全之处，保证代码运行的安全；
        提高编译器效率，增加运行速度；
        为未来新版本的Javascript做好铺垫。
24、js中的this是干嘛用的
    略
25、对象的prototype是什么
    ，原型就是对象的蓝图。如果它存在当前对象中，则将其用作属性和方法的回退。它是在对象之间共享属性和功能的方法，这也是JavaScript实现继承的核心。
26、什么是IIFE,其用途是什么
    IIFE或立即调用的函数表达式是在创建或声明后将被调用或执行的函数。创建IIFE的语法是，将function (){}包裹在在括号()内，然后再用另一个括号()调用它，如：(function(){})()
27、说说call、apply，以及两者的区别；以及bind
    略
28、什么是函数式编程，js的哪些特性使其成为函数式语言的候选语言
    函数式编程（通常缩写为FP）是通过编写纯函数，避免共享状态、可变数据、副作用 来构建软件的过程。数式编程是声明式 的而不是命令式 的，应用程序的状态是通过纯函数流动的。与面向对象编程形成对比，面向对象中应用程序的状态通常与对象中的方法共享和共处。

    函数式编程是一种编程范式 ，这意味着它是一种基于一些基本的定义原则（如上所列）思考软件构建的方式。当然，编程范式的其他示例也包括面向对象编程和过程编程。

    函数式的代码往往比命令式或面向对象的代码更简洁，更可预测，更容易测试 - 但如果不熟悉它以及与之相关的常见模式，函数式的代码也可能看起来更密集杂乱，并且 相关文献对新人来说是不好理解的。
    JavaScript支持闭包和高阶函数是函数式编程语言的特点。
29、什么是高阶函数
    是将函数作为参数或返回值的函数
30、为什么函数被称为一等公民
    在JavaScript中，函数不仅拥有一切传统函数的使用方式（声明和调用），而且可以做到像简单值一样赋值（var func = function(){}）、传参(function func(x,callback){callback();})、返回(function(){return function(){}})，这样的函数也称之为第一级函数（First-class Function）。不仅如此，JavaScript中的函数还充当了类的构造函数的作用，同时又是一个Function类的实例(instance)。这样的多重身份让JavaScript的函数变得非常重要。
31、实现map、filter、reduce的方法
    略
32、arguments的对象是什么
    arguments对象是函数中传递的参数值的集合。它是一个类似数组的对象，因为它有一个length属性，我们可以使用数组索引表示法arguments[1]来访问单个值，但它没有数组中的内置方法，如：forEach、reduce、filter和map。
    我们可以使用Array.prototype.slice将arguments对象转换成一个数组。
33、如何创建prototype的对象
    使用object.create方法创建没有原型的对象
    代码：
        const o1 = {};
        console.log(o1.toString()); // [object Object]

        const o2 = Object.create(null);
        console.log(o2.toString());
        // throws an error o2.toString is not a function 
34、为什么子调用这个函数时，代码中的b会变成一个全局变量
    代码语言：javascript

    function myFunc() {
    let a = b = 0;
    }

    myFunc();
    原因是赋值运算符是从右到左的求值的。这意味着当多个赋值运算符出现在一个表达式中时，它们是从右向左求值的。所以上面代码变成了这样：


    function myFunc() {
    let a = (b = 0);
    }

    myFunc();
    首先，表达式b = 0求值，在本例中b没有声明。因此，JS引擎在这个函数外创建了一个全局变量b，之后表达式b = 0的返回值为0，并赋给新的局部变量a。

    我们可以通过在赋值之前先声明变量来解决这个问题。

    function myFunc() {
    let a,b;
    a = b = 0;
    }
    myFunc();

35、ecmascript是什么？
    ECMAScript 是编写脚本语言的标准，这意味着JavaScript遵循ECMAScript标准中的规范变化，因为它是JavaScript的蓝图。
    ECMAScript 和 Javascript，本质上都跟一门语言有关，一个是语言本身的名字，一个是语言的约束条件
    只不过发明JavaScript的那个人（Netscape公司），把东西交给了ECMA（European Computer Manufacturers Association），这个人规定一下他的标准，因为当时有java语言了，又想强调这个东西是让ECMA这个人定的规则，所以就这样一个神奇的东西诞生了，这个东西的名称就叫做ECMAScript。
    javaScript = ECMAScript + DOM + BOM（自认为是一种广义的JavaScript）
    ECMAScript说什么JavaScript就得做什么！
    JavaScript（狭义的JavaScript）做什么都要问问ECMAScript我能不能这样干！如果不能我就错了！能我就是对的！
    ——突然感觉JavaScript好没有尊严，为啥要搞个人出来约束自己，
    那个人被创造出来也好委屈，自己被创造出来完全是因为要约束JavaScript。
36、es6有哪些新特性
    箭头函数
    类
    模板字符串
    加强的对象字面量
    对象解构
    Promise
    生成器
    模块
    Symbol
    代理
    Set
    函数默认参数
    rest 和展开
    块作用域

37、var和let、const有什么区别
    略
38、什么是箭头函数
    箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this，arguments，super或new.target。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。
39、什么是类
    是在 JS 中编写构造函数的新方法。它是使用构造函数的语法糖，在底层中使用仍然是原型和基于原型的继承。
40、什么是模版字符串
    模板字符串是在 JS 中创建字符串的一种新方法。我们可以通过使用反引号使模板字符串化。
41、什么是对象解构
    对象析构是从对象或数组中获取或提取值的一种新的、更简洁的方法。假设有如下的对象：
    const employee = {
    firstName: "Marko",
    lastName: "Polo",
    position: "Software Developer",
    yearHired: 2017
    };
    从对象获取属性，早期方法是创建一个与对象属性同名的变量。这种方法很麻烦，因为我们要为每个属性创建一个新变量。假设我们有一个大对象，它有很多属性和方法，用这种方法提取属性会很麻烦。


    var firstName = employee.firstName;
    var lastName = employee.lastName;
    var position = employee.position;
    var yearHired = employee.yearHired;
    使用解构方式语法就变得简洁多了：

    { firstName, lastName, position, yearHired } = employee;
    我们还可以为属性取别名：

    let { firstName: fName, lastName: lName, position, yearHired } = employee;
    当然如果属性值为 undefined 时，我们还可以指定默认值：

    let { firstName = "Mark", lastName: lName, position, yearHired } = employee;

42、什么是es6模版
    略
43、什么是set对象，它是如何工作的
    略
44、什么是回调函数
    回调函数是一段可执行的代码段，它作为一个参数传递给其他的代码，其作用是在需要的时候方便调用这段（回调函数）代码。

    在JavaScript中函数也是对象的一种，同样对象可以作为参数传递给函数，因此函数也可以作为参数传递给另外一个函数，这个作为参数的函数就是回调函数。
45、说说promise
    略
46、说async/await
    略
47、展开运算符和rest运算符有什么区别
    展开运算符(spread)是三个点(...)，可以将一个数组转为用逗号分隔的参数序列。说的通俗易懂点，有点像化骨绵掌，把一个大元素给打散成一个个单独的小元素。

    剩余运算符也是用三个点(...)表示，它的样子看起来和展开操作符一样，但是它是用于解构数组和对象。在某种程度上，剩余元素和展开元素相反，展开元素会“展开”数组变成多个元素，剩余元素会收集多个元素和“压缩”成一个单一的元素。
48、什么默认函数
    认参数是在 JS 中定义默认变量的一种新方法，
49、什么是包装对象
    基本类型：Undefined,Null,Boolean,Number,String,Symbol,BigInt
    引用类型：Object,Array,Date,RegExp等，说白了就是对象。

    let name = "marko";

    console.log(typeof name); // "string"
    console.log(name.toUpperCase()); // "MARKO"
    name类型是 string，属于基本类型，所以它没有属性和方法，但是在这个例子中，我们调用了一个toUpperCase()方法，它不会抛出错误，还返回了对象的变量值。

    原因是基本类型的值被临时转换或强制转换为对象，因此name变量的行为类似于对象。除null和undefined之外的每个基本类型都有自己包装对象。也就是：String，Number，Boolean，Symbol和BigInt。在这种情况下，name.toUpperCase()在幕后看起来如下：

    console.log(new String(name).toUpperCase()); // "MARKO"
    在完成访问属性或调用方法之后，新创建的对象将立即被丢弃。

50、隐式和显示转换有什么区别
    隐式强制转换是一种将值转换为另一种类型的方法，这个过程是自动完成的，无需我们手动操作。
51、什么是NaN,以及如何检测
    NaN表示“非数字”是 JS 中的一个值，该值是将数字转换或执行为非数字值的运算结果，因此结果为NaN。
    JS 有一个内置的isNaN方法，用于测试值是否为isNaN值，但是这个函数有一个奇怪的行为。
    在ES6中，建议使用Number.isNaN方法，因为它确实会检查该值（如果确实是NaN），或者我们可以使自己的辅助函数检查此问题，因为在 JS 中，NaN是唯一的值，它不等于自己。
52、如何判断数组
    isArray方法用来检查是否为数组。当传递他的参数为数组时，当传递给它的参数是数组时，它返回的值时true,否则返回false
53、如何在不使用%模的情况下检查一个数字为偶数
    我们可以对这个问题使用按位&运算符，&对其操作数进行运算，并将其视为二进制值，然后执行与运算。
54、如何检查对象中是否存在某个属性
    in、hasOwnProperty（返回值是布尔值）、obj["prop"]。如果属性存在，它将返回该属性的值，否则将返回undefined。
55、ajax是什么
    略
56、如何在js中创建对象
    对象字面量
        const o = {
            name: "前端小智",
            greeting() {
                return `Hi, 我是${this.name}`;
            }
        };

        o.greeting(); // "Hi, 我是前端小智"
    构造函数

        function Person(name) {
            this.name = name;
        }

        Person.prototype.greeting = function () {
        return `Hi, 我是${this.name}`;
        }

        const mark = new Person("前端小智");

        mark.greeting(); // "Hi, 我是前端小智"
    object.create
        const n = {
            greeting() {
                return `Hi, 我是${this.name}`;
            }
        };

        const o = Object.create(n); 
        o.name = "前端小智";
57、object.seal和object.freeze的区别
    Object.freeze()

    Object.freeze() 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。

    Object.seal()
    Object.seal()方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要可写就可以改变。
    方法的相同点：

        ES5新增。
        对象不可能扩展，也就是不能再添加新的属性或者方法。
        对象已有属性不允许被删除。
        对象属性特性不可以重新配置。
        方法不同点：

        Object.seal方法生成的密封对象，如果属性是可写的，那么可以修改属性值。
        * Object.freeze方法生成的冻结对象，属性都是不可写的，也就是属性值无法更改。
    
58、对象中的in和hasOwnProperty的区别
    hasOwnPropert()方法返回值是一个布尔值，指示对象自身属性中是否具有指定的属性，因此这个方法会忽略掉那些从原型链上继承到的属性。

    如果指定的属性在指定的对象或其原型链中，则in 运算符返回true。
59、有哪些方法可以处理js中的异步代码
    回调
    Promise
    async/await
    还有一些库：async.js, bluebird, q, co
60、调用函数，可以使用哪些方法
    作为函数调用——如果一个函数没有作为方法、构造函数、apply、call 调用时，此时 this 指向的是 window 对象（非严格模式）
61、什么是缓存以及有什么作用
    略
62、手动实现缓存方法
    略
63、为什么type of null 返回的是object,如何检查一个值是否为null

64、new关键字的作用
    new关键字与构造函数一起使用以创建对象:
        function Employee(name, position, yearHired) {
            this.name = name;
            this.position = position;
            this.yearHired = yearHired;
        };

        const emp = new Employee("Marko Polo", "Software Developer", 2017);
65、什么时候不能使用箭头函数，说出3个例子
    不应该使用箭头函数一些情况：

    当想要函数被提升时(箭头函数是匿名的)
    要在函数中使用this/arguments时，由于箭头函数本身不具有this/arguments，因此它们取决于外部上下文
    使用命名函数(箭头函数是匿名的)
    使用函数作为构造函数时(箭头函数没有构造函数)
    当想在对象字面是以将函数作为属性添加并在其中使用对象时，因为咱们无法访问 this 即对象本身。
66、const和object.freeze的区别
    const和Object.freeze是两个完全不同的概念。
    const 声明一个只读的变量，一旦声明，常量的值就不可改变：

        const person = {
            name: "Leonardo"
        };
        let animal = {
            species: "snake"
        };
        person = animal; // ERROR "person" is read-only  
    Object.freeze适用于值，更具体地说，适用于对象值，它使对象不可变，即不能更改其属性。
        let person = {
            name: "Leonardo"
        };
        let animal = {
            species: "snake"
        };
        Object.freeze(person);
        person.name = "Lima"; //TypeError: Cannot assign to read only property 'name' of object
        console.log(person);   
67、如何在js中深冻结对象
    如果咱们想要确保对象被深冻结，就必须创建一个递归函数来冻结对象类型的每个属性：

    没有冻结
        let person = {
            name: "Leonardo",
            profession: {
                name: "developer"
            }
        };
        Object.freeze(person); 
        person.profession.name = "doctor";
        console.log(person); //output { name: 'Leonardo', profession: { name: 'doctor' } }

    深冻结
        function deepFreeze(object) {
            let propNames = Object.getOwnPropertyNames(object);
            for (let name of propNames) {
                let value = object[name];
                object[name] = value && typeof value === "object" ?
                    deepFreeze(value) : value;
            }
            return Object.freeze(object);
        }
        let person = {
            name: "Leonardo",
            profession: {
                name: "developer"
            }
        };
        deepFreeze(person);
        person.profession.name = "doctor"; // TypeError: Cannot assign to read only property 'name' of object

68、lterator是什么，有什么作用
    遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署Iterator接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

    Iterator 的作用有三个：

    为各种数据结构，提供一个统一的、简便的访问接口；
    使得数据结构的成员能够按某种次序排列；
    ES6 创造了一种新的遍历命令for…of循环，Iterator 接口主要供for…of消费。
    遍历过程：

    创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
    第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
    第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
    不断调用指针对象的next方法，直到它指向数据结构的结束位置。
    每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。
    //obj就是可遍历的，因为它遵循了Iterator标准，且包含[Symbol.iterator]方法，方法函数也符合标准的Iterator接口规范。
    //obj.[Symbol.iterator]() 就是Iterator遍历器
        let obj = {
        data: [ 'hello', 'world' ],
        [Symbol.iterator]() {
            const self = this;
            let index = 0;
            return {
            next() {
                if (index < self.data.length) {
                return {
                    value: self.data[index++],
                    done: false
                };
                } else {
                return { value: undefined, done: true };
                }
            }
            };
        }
        };
69、generator函数是什么，有什么作用

    如果说 JavaScrip 是 ECMAScript 标准的一种具体实现、Iterator遍历器是Iterator的具体实现，那么Generator函数可以说是Iterator接口的具体实现方式。

执行Generator函数会返回一个遍历器对象，每一次Generator函数里面的yield都相当一次遍历器对象的next()方法，并且可以通过next(value)方法传入自定义的value,来改变Generator函数的行为。

Generator函数可以通过配合Thunk 函数更轻松更优雅的实现异步编程和控制流管理。