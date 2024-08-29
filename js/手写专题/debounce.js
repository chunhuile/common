/**
 * @file 防抖
 * @description 原理：不管事件触发频率多高，一定要在事件触发n秒后才能执行，如果你在一个事件触发的n秒内又触发了这个事件，就以新的事件时间为准，n秒后才执行，
 * 总之，触发完事件n秒不会再被触发，n秒后才会再次执行
 * 
 * 应用场景：
 * 1、窗口大小变化，调整样式
 * 2、搜索框，输入1000豪秒后搜索
 * 3、表单验证，输入1000毫秒后验证
 * 4、频繁点击按钮，使用防抖避免重复提交请求
 * 
 * 防抖实现：
 * debounce实则是个包装函数，通过传入的操作函数和时间间隔，来返回一个间隔
 * 新函数中主要是通过定时器来设置函数调用的频率
 * flag只有第一次触发的时候会立即执行
 */ 

function debounce(flag,handler,ms){
    let timer = null

    return function(...args){
        clearTimeout (timer)
        
        if(flag && !timer){
            handler.apply(this.args)
        }

        timer = setTimeout(()=>{
            handler.apply(this.args)
        },1000)
    }
}

// demo

window.addEventListener("resize",debounce(handler,1000))

function handler(){
    console.log("hello")
}