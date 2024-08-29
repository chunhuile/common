/**
 * 发布订阅模式（Publish-Subscribe Pattern）是一种常见的设计模式，通常用于解耦发布者和订阅者之间的关系。发布者无需知道谁订阅了他们的事件，订阅者也无需知道发布者是谁。
 * 通过中间的消息中心（或事件调度器）来管理发布和订阅关系。
 * 
*/

// 实现一个简单的发布订阅模式

class EventEmitter {
    constructor() {
        this.events = {};  // 用来存储事件及其订阅者
    }

    // 订阅事件
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];  // 如果该事件没有订阅者，初始化一个空数组
        }
        this.events[event].push(listener);  // 将订阅者加入该事件的订阅者列表
    }

    // 发布事件
    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => {
                listener.apply(this, args);  // 触发该事件的所有订阅者，并传入参数
            });
        }
    }

    // 取消订阅
    off(event, listener) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(l => l !== listener);
        }
    }

    // 只执行一次的订阅
    once(event, listener) {
        const wrapper = (...args) => {
            listener.apply(this, args);
            this.off(event, wrapper);  // 触发一次后取消订阅
        };
        this.on(event, wrapper);
    }
}

// // 使用示例
// const emitter = new EventEmitter();

// function responseToEvent1(msg) {
//     console.log('Event 1 received:', msg);
// }

// function responseToEvent2(msg) {
//     console.log('Event 2 received:', msg);
// }

// // 订阅事件
// emitter.on('event1', responseToEvent1);
// emitter.on('event2', responseToEvent2);

// // 发布事件
// emitter.emit('event1', 'Hello from event 1!');  // 输出: Event 1 received: Hello from event 1!
// emitter.emit('event2', 'Hello from event 2!');  // 输出: Event 2 received: Hello from event 2!

// // 取消订阅事件
// emitter.off('event1', responseToEvent1);

// // 发布事件，responseToEvent1不会被触发
// emitter.emit('event1', 'Hello again from event 1!');  // 无输出

// // 一次性订阅事件
// emitter.once('event3', (msg) => console.log('Event 3 received:', msg));
// emitter.emit('event3', 'Hello from event 3!');  // 输出: Event 3 received: Hello from event 3!
// emitter.emit('event3', 'Hello again from event 3!');  // 无输出
