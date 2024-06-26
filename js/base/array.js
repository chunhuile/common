/**
 * @file 用于描述数组的方法
 * 
*/

// 1、sort( )：sort 排序 如果下面参数的正反 控制 升序和降序 ，返回的是从新排序的原数组
// 2、splice( )：向数组的指定index处插入 返回的是被删除掉的元素的集合，会改变原有数组；截取类 没有参数，返回空数组，原数组不变；一个参数，从该参数表示的索引位开始截取，直至数组结束，返回截取的 数组，原数组改变；两个参数，第一个参数表示开始截取的索引位，第二个参数表示截取的长度，返回截取的 数组，原数组改变；三个或者更多参数，第三个及以后的参数表示要从截取位插入的值。会改变原数据
// 3、pop( )：从尾部删除一个元素 返回被删除掉的元素，改变原有数组。
// 4、push( )：向数组的末尾追加 返回值是添加数据后数组的新长度，改变原有数组。
// 5、unshift( )：向数组的开头添加 返回值是添加数据后数组的新长度，改变原有数组。
// 6、shift( )：从头部删除一个元素 返回被删除掉的元素，改变原有数组。
// 7、reverse( )： 原数组倒序  它的返回值是倒序之后的原数组
// 8、concat( )：数组合并。
// 9、slice( )：数组元素的截取，返回一个新数组，新数组是截取的元素，可以为负值。从数组中截取，如果不传参，会返回原数组。如果只传入一个参数，会从头部开始删除，直到数组结束，原数组不会改变；传入两个参数，第一个是开始截取的索引，第二个是结束截取的索引，不包含结束截取的这一项，原数组不会改变。最多可以接受两个参数。
// 10、join( )：讲数组进行分割成为字符串  这能分割一层在套一层就分隔不了了
// 11、toString( )：数组转字符串；
// 12、toLocaleString( )：将数组转换为本地数组。
// 13、forEach( )：数组进行遍历；
// 14、map( )：没有return时，对数组的遍历。有return时，返回一个新数组，该新数组的元素是经过过滤(逻辑处理)过的函数。
// 15、filter( )：对数组中的每一运行给定的函数，会返回满足该函数的项组成的数组。
// 16、every( )：当数组中每一个元素在callback上被返回true时就返回true。（注：every其实类似filter，只不过它的功能是判断是不是数组中的所有元素都符合条件，并且返回的是布尔值）。
// 17、some( )：当数组中有一个元素在callback上被返回true时就返回true。（注：every其实类似filter，只不过它的功能是判断是不是数组中的所有元素都符合条件，并且返回的是布尔值）。
// 18、reduce( )：回调函数中有4个参数。prev（之前计算过的值），next（之前计算过的下一个的值），index，arr。把数组列表计算成一个
// 19.isArray() 判断是否是数组
// 20. indexOf  找索如果找到了就会返回当前的一个下标，若果没找到就会反回-1
// 21. lastIndexOf 它是从最后一个值向前查找的 找索如果找到了就会返回当前的一个下标，若果没找到就会反回-1
// 22. Array.of() 填充单个值
// 23. Array.from() 来源是类数组    
// 24.fill填充方法 可以传入3各参数 可以填充数组里的值也就是替换 如果一个值全部都替换掉 ，    第一个参数就是值 第二个参数 从起始第几个 第三个参数就是最后一个
// find  查找这一组数 符合条件的第一个数 给他返回出来
// findIndex() 查找这一组数 符合条件的第一数的下标 给他返回出来     没有返回 -1  
// keys 属性名  values属性值  entries属性和属性值
// forEach 循环遍历 有3个参数 无法使用 break continue ， 参数一就是每个元素 参数二就是每个下标 参数三就是每个一项包扩下标和元素
 
 
// ### 改变数组本身的api
// 1. `pop()`  尾部弹出一个元素
// 2. `push()` 尾部插入一个元素
// 3. `shift()`  头部弹出一个元素
// 4. `unshift()`  头部插入一个元素
// 5. `sort([func])` 对数组进行排序,func有2各参数，其返回值小于0，那么参数1被排列到参数2之前，反之参数2排在参数1之前
// 6. `reverse()` 原位反转数组中的元素
// 7. `splice(pos,deleteCount,...item)`  返回修改后的数组，从pos开始删除deleteCount个元素，并在当前位置插入items
// 8. `copyWithin(pos[, start[, end]])` 复制从start到end(不包括end)的元素，到pos开始的索引，返回改变后的数组，浅拷贝
// 9. `arr.fill(value[, start[, end]])` 从start到end默认到数组最后一个位置，不包括end，填充val，返回填充后的数组
// 其他数组api不改变原数组
 
 
 
 
// map 映射关系的数组  map 主要就是有返回值可以return 数组   判断的会返回boolean 
// 1、map()方法返回一个新数组，新数组中的元素为原始数组中的每个元素调用函数处理后得到的值。
// 2、map()方法按照原始数组元素顺序依次处理元素。
 
// 注意：
// map()不会对空数组进行检测。
// map()不会改变原始数组。
// map() 函数的作用是对数组中的每一个元素进行处理，返回新的元素。
// filter 满足条件的都能返回 是一个数组
// some返回boolean 循环数组 只要有一个成员通过了就会返回 true 反而 false
// every返回boolean 循环数组 只有全部成员通过了就会返回 true 反而 false 
// reduce() 累加器 把上一次计算的值，给下一次计算进行相加
// set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用  
// delete  [1] delete 可以删除数组中的一向
// **Array.isArray()** 用于确定传递的值是否是一个 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)。
// flat  扁平化 将嵌套的数组 “拉平”，变成一维数组。该方法返回一个新数组，对原数据没有影响。// 参数写的就是代表要扁平到第几层
 
 
 
// //1、every()
// var arr = [1,56,80,5];
// var main = arr.every(n => n > 0);
// console.log(main)   //输出:true
 
// //2、some()
// var arr = [1,-56,80,-5];
// var main = arr.some(n => n > 0);
// console.log(main)    //输出:true
 
// //3、reducer()
// var arr = [10,20,30,40]
// let result = arr.reduce(function(prev,next,index,arr){
// 	return prev + next;
// })
// console.log(result);  //输出:100
 
// // 4、filter  返回满足要求的数组项组成的新数组
// var arr3 = [3,6,7,12,20,64,35]
// var result3 = arr3.filter((item,index,arr)=>{
//     return item > 3
// })
// console.log(result3)  //[6,7,12,20,64,35]
 
// // 5、map  返回每次函数调用的结果组成的数组
// var arr4 = [1,2]
// var result4 = arr4.map((item,index,arr)=>{
//     return `<span>${item}</span>`
// })
// console.log(result4)  
// /*[ '<span>1</span>',
//   '<span>2</span>', ]*/
 
 
// ES6数组的常用方法：
 
// 1、Array.from( )：将对象或字符串转成数组，注意得有length。
// 2、Array.of( )： 将一组值转换为数组。
// 3、copyWithin(target，start(可选)，end(可选))：数组内数据的复制替换
// 	target：从该位置开始替换数据；
// 	start：从该位置开始读取数据，默认为0；
// 	end：到该位置停止数据的读取，默认为数组的长度
// 4、find( )：用于找出第一个符合条件的数组成员。
// 5、findIndex( )：返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
// 6、fill(value，start，end)：使用给定值，填充一个数组。
// 	value：填充的值；
// 	start：开始填充的位置；
// 	end：填充结束的位置。
// 7、keys( )：对键名的遍历。
// 8、values( )：对键值的遍历。
// 9、entries( )：对键值对的遍历。
// 10、includes( )：数组原型的方法,查找一个数值是否在数组中，只能判断一些简单类型的数据，对于复杂类型的数据无法判断。该方法接受两个参数，分别是查询的数据和初始的查询索引值。
// 11、flat( )：用于数组扁平，数组去除未定义。可以去除空项。
// 12、flatMap( )：对原数组的每个成员执行一个函数。
// 13、Map( )：是一组键值对的结构，具有极快的查找速度。
// 14、Set( )：Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。
 
 
// //1、Array.from()  --   Array.of()
// 	var  arrayLink = {
// 		"0":"a",
// 		"1":"b",
// 		"2":"c",
// 		length:3
// 	}
// 	var arr = Array.from(arrayLink)
// 	console.log(arr)   // 输出: [a,b,c]
// 	console.log(Array.from("abcdefg"))  //输出:["a", "b", "c", "d", "e", "f", "g"]
// 	console.log(Array.of(1,2,3,4,5))  //输出: [1, 2, 3, 4, 5]
 
// //2、copyWithin()
// 	var arr = [1,2,3,4,5];
// 	var main = arr.copyWithin(0,3);
// 	console.log(main);   //输出:[4,5,3,4,5]
 
// //3、find()
// 	var arr = [1,-5,2,9,-6];
// 	var main = arr.find(n =>  n < 0);
// 	console.log(main);   //输出:-5
 
// //4、fill()
// 	var arr = ["a","b","c","d"];
// 	console.log(arr.fill(7,1,2));//输出:["a",7,"c","d"]  
 
// //5、keys()  values()  entries()
// 	var arr = ["a","b","c","d"];
// 	for(let index of arr.keys()){
// 		console.log(index);
// 	}
// 	for(let elem of arr.values()){
// 		console.log(elem);
// 	}
// 	for(let [index,elem] of arr.entries()){
// 		console.log(index,elem);
// 	}  
 
// //6、includes()
// 	let arr = [12,34,223,45,67]
// 	console.log(arr.includes(45))   //输出:true
// 	[1, 2, NaN].includes(NaN)     // true
// 	[1, 2, NaN].indexOf(NaN)      // -1
 
// //7、Map
// 	var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
// 	m.get('Michael'); // 95
// 	//初始化Map需要一个二维数组，或者直接初始化一个空Map。Map具有以下方法：
// 	var m = new Map(); // 空Map
// 	m.set('Adam', 67); // 添加新的key-value
// 	m.set('Bob', 59);
// 	m.has('Adam'); // 是否存在key 'Adam': true
// 	m.get('Adam'); // 67
// 	m.delete('Adam'); // 删除key 'Adam'
// 	m.get('Adam'); // undefined
// 	//由于一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值冲掉：
// 	var m = new Map();
// 	m.set('Adam', 67);
// 	m.set('Adam', 88);
// 	m.get('Adam'); // 88
 
// //8、Set
// 	//要创建一个Set，需要提供一个Array作为输入，或者直接创建一个空Set：
// 	var s1 = new Set(); // 空Set
// 	var s2 = new Set([1, 2, 3]); // 含1, 2, 3
// 	//重复元素在Set中自动被过滤：
// 	var s = new Set([1, 2, 3, 3, '3']);
// 	s; // Set {1, 2, 3, "3"}  注意：数字3和字符串'3'是不同的元素
// 	//通过add(key)方法可以添加元素到Set中，可以重复添加，但不会有效果：
// 	s.add(4);
// 	s; // Set {1, 2, 3, 4}
// 	s.add(4);
// 	s; // 仍然是 Set {1, 2, 3, 4}
// 	//通过delete(key)方法可以删除元素：
// 	var s = new Set([1, 2, 3]);
// 	s; // Set {1, 2, 3}
// 	s.delete(3);
// 	s; // Set {1, 2}