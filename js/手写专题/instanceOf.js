/**
 * @file 判断的是右操作数的prototypr属性是否出现在左操作数的原型链，核心数要拿到左操作数的原型进行检查，
 * 要顺着原型链检查，。取得原型是利用object.getPrototypeOf(obj)
 * 
*/

function myInstanceof(){
    if(typeof ctor !== "function") {throw new TypeError("警告")}
    
        const rightProto = ctor.prototype

        let leftProto = Object.getPrototypeOf(obj)

        let isInstanceFlag = leftProto === rightProto

        while(!isInstanceFlag && leftProto){

            if(leftProto == rightProto){
                isInstanceFlag = true
            }else {
                leftProto = object.getPrototypeOf(leftProto)
            }

        }

        return isInstanceFlag

}