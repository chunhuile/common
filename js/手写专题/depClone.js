/**
 * 深拷贝
 * 
 * 原理：深拷贝指拷贝一个新的对象，复制与原来对象的所有属性值相同的值，且指向为新的动态分配的地址内存
 * 实现
 */ 

function deepClone(val){

    var type = getType(val)//类型检测

    if(type === "object"){
        var result = {}
        Object.keys(val).forEach((i)=>{
            result[i] = deepClone(val[i])
        })
    }else if (type == "date"){
        return new Date(val.getTime())
    }else if(type == "regexp"){
        return new RegExp(val.source,val.flags)
        
    }else if(type == "array"){
        return val.map(item=>deepClone(item))
    }else if(type == "function"){
        return eval("("+val.toString()+")")
    }else if(type === "map" || type == "set"){
        return new val.constructor(val)
    }else {
        return val
    }
}


function getType(val){
    Object.prototype.toString.call(val).slice(8,-1).toLowerCase()

}