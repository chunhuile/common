/**
 * @file 柯里化
 * 定义：柯里化是一种将接收多个参数的函数转换为接收一个参数的函数，并返回接收剩余参数的新函数的技术。
 * 换句话说，柯里化可以把一个多参数函数转化为一系列接收单一参数的函数
 */ 

/**
 * 示例解释
例如，有一个函数 f(a, b, c)，它接收三个参数。通过柯里化，这个函数可以转换为 f(a)(b)(c) 的形式。

柯里化的主要优势：

参数复用：可以方便地复用一些参数，比如在处理部分参数相同的情况时。
延迟执行：可以将参数的传递延迟到合适的时机，从而提高代码的灵活性。
代码简洁：通过柯里化，代码可以更加简洁和易读，尤其在函数式编程中。
*/ 

// 简单版的柯里化实现：
function curry(fn) {
    // 获取函数的参数长度
    const arity = fn.length;

    // 内部递归的柯里化函数
    function curried(...args) {
        // 如果传递的参数足够多，直接执行原函数
        if (args.length >= arity) {
            return fn.apply(this, args);
        } else {
            // 否则，返回一个接收剩余参数的新函数
            return function (...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    }

    return curried;
}


function add(a, b, c) {
    return a + b + c;
}

// 使用柯里化函数包装
const curriedAdd = curry(add);

// 多种调用方式
console.log(curriedAdd(1)(2)(3)); // 输出 6


// 进阶：支持任意参数的柯里化

function curry2(fn, ...args) {
    // 如果传递的参数数量已经大于等于函数的参数数量，执行函数
    if (args.length >= fn.length) {
        return fn(...args);
    }
    // 否则继续返回函数，接收剩余的参数
    return (...newArgs) => curry(fn, ...args, ...newArgs);
}

// 使用示例
function multiply(a, b, c, d) {
    return a * b * c * d;
}

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)(5)); // 输出 120
