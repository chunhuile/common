/**
 * @file 该文档是实现继承
 * 
 *  继承是通过原型链实现对象之间的继承。
 */ 


/**
 * @dep 原型链继承
 */ 
function inherit(){
 ChildClass.prototype= Object(SuperClass.prototype)
 ChildClass.prototype.constructor = ChildClass
}

/**
 * 构造函数继承
 */ 
function SuperClass(){
    this.propA="a"
}
function ChildClass(){
    SuperClass.call(this);
    this.propB="b"
}

inherit(ChildClass,SuperClass)

/**
 * es5的写法 父类构造函数 A是父类 B是子类
 * */ 
function A(name) {
    this.name = name
}
A.prototype.getName= function(){
    console.log(name)
}

function B(){
    A.apply(this.arguments)
}

// 原型链继承 通过object.create(A.prototype) 实现b继承a的原型方法
const _proto_ = Object.create(A.prototype);
_proto_.constructor = B;
const B = new B("lisa")
B.getName ()


//es6的写法 
class A{
    constructor(name){
        this.name = name
    }
    getName(){
        console.log(this.name,"this.name")
    }
}

class B extends A{
    constructor(name){
        super(name)
    }
}

const b = new B("lisa")
console.log(b.name,"kk")
