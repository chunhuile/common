/**
 * @dep  先简单介绍 Promise 的核心概念
Promise 是一种用于处理异步操作的对象。它有三种状态：pending（进行中）、fulfilled（已成功）、rejected（已失败）。
Promise 的状态一旦从 pending 转变为 fulfilled 或 rejected，就不能再更改。
Promise 实现了链式调用，通过 then 方法注册回调函数，处理异步操作的结果。
 * 
 * */ 

class MyPromise {
    constructor(executor) {
      // 初始状态为 pending
      this.state = 'pending';
      this.value = undefined;
      this.reason = undefined;
  
      // 成功和失败的回调队列
      this.onResolvedCallbacks = [];
      this.onRejectedCallbacks = [];
  
      const resolve = (value) => {
        if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;
          this.onResolvedCallbacks.forEach(fn => fn());
        }
      };
  
      const reject = (reason) => {
        if (this.state === 'pending') {
          this.state = 'rejected';
          this.reason = reason;
          this.onRejectedCallbacks.forEach(fn => fn());
        }
      };
  
      try {
        executor(resolve, reject);
      } catch (err) {
        reject(err);
      }
    }
  
    then(onFulfilled, onRejected) {
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
      onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };
  
      const promise2 = new MyPromise((resolve, reject) => {
        if (this.state === 'fulfilled') {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (err) {
              reject(err);
            }
          }, 0);
        }
  
        if (this.state === 'rejected') {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (err) {
              reject(err);
            }
          }, 0);
        }
  
        if (this.state === 'pending') {
          this.onResolvedCallbacks.push(() => {
            setTimeout(() => {
              try {
                const x = onFulfilled(this.value);
                resolvePromise(promise2, x, resolve, reject);
              } catch (err) {
                reject(err);
              }
            }, 0);
          });
  
          this.onRejectedCallbacks.push(() => {
            setTimeout(() => {
              try {
                const x = onRejected(this.reason);
                resolvePromise(promise2, x, resolve, reject);
              } catch (err) {
                reject(err);
              }
            }, 0);
          });
        }
      });
  
      return promise2;
    }
  }
  
  function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
      return reject(new TypeError('Chaining cycle detected for promise'));
    }
  
    let called = false;
  
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
      try {
        let then = x.then;
        if (typeof then === 'function') {
          then.call(x, y => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          }, r => {
            if (called) return;
            called = true;
            reject(r);
          });
        } else {
          resolve(x);
        }
      } catch (err) {
        if (called) return;
        called = true;
        reject(err);
      }
    } else {
      resolve(x);
    }
  }
  