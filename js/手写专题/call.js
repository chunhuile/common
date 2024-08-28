
/**
 * @file 手写call
 * */ 
function arg2Array(args){
    var arr = [];
    for(var i = 0; i<args.length;i++){
        arr[i] = args[i]
    }
    return arr
}

function getGlobal(){
    return (function(){return this;})
}

Array.prototype.myCall = function(){
    var thisArg = arguments[0];
    var args = [...arguments].slice(1);
    var invokeFunc = this;
    var isStrict = (function(){return this === undefined})
    if(isStrict){
        if(typeof thisArg ==="string"){
            thisArg = new String(thisArg)

        }else if(typeof thisArg === "boolean"){
            thisArg = new Boolean(thisArg)

        }else if(typeof thisArg === "number"){
            thisArg = new Number(thisArg)
        }
    }

    if(!thisArg){ return invokeFunc(...args)}

    var uniqProp = Symbol()
    thisArg[uniqProp] = invokeFunc
    return thisArg[uniqProp](...args)
}