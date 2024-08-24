/**
 * @file 该文档用于promise封装ajax
 * 
 * 封装一个基于 Promise 的 AJAX 请求，可以让代码更加简洁和易于维护。
 * 下面是一个简单的示例，使用原生 XMLHttpRequest 来封装 Promise：
 */ 

function ajaxRequest(url, method = 'GET', data = null) {
    return new Promise((resolve, reject) => {
        // 创建XMLHttpRequest对象
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);

        // 设置请求头，针对POST请求
        if (method === 'POST' && data) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        // 监听请求状态变化
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) { // 请求完成
                if (xhr.status >= 200 && xhr.status < 300) {
                    // 请求成功，解析响应数据
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    // 请求失败，返回错误信息
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    });
                }
            }
        };

        // 监听请求失败
        xhr.onerror = function () {
            reject({
                status: xhr.status,
                statusText: xhr.statusText
            });
        };

        // 发送请求
        if (method === 'POST' && data) {
            xhr.send(JSON.stringify(data));
        } else {
            xhr.send();
        }
    });
}

/*
* 函数参数

url: 请求的 URL。
method: 请求方法，默认为 GET。
data: 请求数据（适用于 POST 请求）。
Promise

resolve: 请求成功时，返回解析后的响应数据。
reject: 请求失败时，返回错误信息。
XMLHttpRequest

xhr.open(method, url, true): 打开请求。
xhr.setRequestHeader('Content-Type', 'application/json'): 设置请求头，发送 JSON 格式的数据。
xhr.onreadystatechange: 监听请求状态变化，当 readyState === 4 时，表示请求完成，根据 status 判断请求成功与否。
xhr.onerror: 处理请求出错的情况。
xhr.send(data): 发送请求，如果是 POST 请求，将数据序列化为 JSON 格式。
*/ 

// 使用示例：

// GET请求
ajaxRequest('https://api.example.com/data')
    .then(response => {
        console.log('Success:', response);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// POST请求
ajaxRequest('https://api.example.com/data', 'POST', { key: 'value' })
    .then(response => {
        console.log('Success:', response);
    })
    .catch(error => {
        console.error('Error:', error);
    });

