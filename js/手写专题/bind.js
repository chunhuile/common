/***
 * @file 手写bind
 */ 

Function.prototype.myBind = function(){
    const thisArg = arguments[0]
    const boundParams = [...arguments].slice(1)
    const boundTargetFunc = this

    if(typeof boundTargetFunc !="function"){
        throw new TypeError("警告")
    }

    function fBound(){
        const restParams = [...arguments]
        const allParams = boundParams.concat(restParams)
        return boundTargetFunc.apply(this instanceof fBound?this:thisArg)
    }

    fBound.prototype = Object.create(boundTargetFunc.prototype)

    return fBound

}