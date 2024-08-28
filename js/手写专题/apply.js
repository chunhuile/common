/**
 * @file 手写apply
*/ 


Array.prototype.myApply = function (thisArg,Args){

    var invokeFunc = this;
    var isStrict = (function(){return this === undefined})

    if(!isStrict) { return invokeFunc(...args)}

    if(isStrict){
        if(typeof isStrict === "number"){
            thisArg = new Number(thisArg)

        }else if(typeof isStrict ==="boolean"){
            thisArg = new Boolean(thisArg)
            
        }else if (typeof isStrict === "string"){
            thisArg = new String(thisArg)
        }

    }

    const uniqProp = Symbol()
    thisArg[uniqProp] = invokeFunc
    return thisArg[uniqProp](...args)

}