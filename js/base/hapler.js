/**
 * @file 常用的正则表达式
 */ 

// 16位颜色值
const colorRegEx = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
console.log(colorRegEx.test('#FFFFFF'));  // true

// 日期匹配 YYYY-MM-DD 或 YYYY/MM/DD
const dateRegEx = /^(\d{4})[-\/](0[1-9]|1[0-2])[-\/](0[1-9]|[12]\d|3[01])$/;
console.log(dateRegEx.test('2024-08-24'));  // true

// QQ号匹配
const qqRegEx = /^[1-9][0-9]{4,10}$/;
console.log(qqRegEx.test('1234567'));  // true

// 手机号验证 (中国大陆)
const phoneRegEx = /^1[3-9]\d{9}$/;
console.log(phoneRegEx.test('13800138000'));  // true
