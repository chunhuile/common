/**
 * @file 节流
 * 
 * 原理：不管事件触发频率多高，只在单位时间内执行一次
 * 应用场景
 * 1、鼠标不断点击
 * 2、监听滚动事件
 * 实现
 * 1、时间戳模版：第一次执行，最后一次不执行
 * 2、定时器模版：第一次不执行，最后一次执行
 */ 


// 时间戳版

function throttle(handler,ms){
    let pre = 0;
    return function(...args){
        if(Date.now() - pre>ms){
            pre = Date.now()
            handler.apply(this,args)
        }
    }
}

// 定时器模版
function throttle2(handler,ms){
    let timer = null
    return function(...args){
        if(!timer){
            timer = setTimeout(()=>{
                timer = null
                handler.apply(this,args)
            })
        }
    }
}

// demo
DocumentFragment.getElementById("btn").addEventListener("click",throttle(handler,1000))

function handler(){
    console.log("ok")
}