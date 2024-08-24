/**
 * @file 该文档用于s实现proxy实现数据响应式的案例
 * proxy可以实现的功能：
 *  1、vue3中实现数据响应式的原理
 *  2、es6中 用来自定义对象中的操作
 *  如:
 *      let p =new proxy(target,handler)
 */ 

let onWatch= (obj, setBind,getLogger) => {
    let handler = {
        get(target,property,receiver){
            getLogger(target,property)
            return Reflect.get(target,property,receiver)
        },
        set(target,property,value,receiver){
            setBind((value,property))
            return Reflect.set(target,property,receiver)
        }
    }

    return new Proxy(obj, handler)

}

let obj= {a:1}

let p = onWatch(obj,(v,property)=>{
    console.log("监听到熟属性值")
},(target,property)=>{
    console.log("测试")
}
)

p.a= 2//监听到属性a的变化

