// 2. 给数组增加 equal 方法，用来判断两个数组里的内容是否完全相等。
// 数组可嵌套，数组内值的类型是数字、字符串、布尔、数组中的一种或几种，不存在循环引用的情况。equal的参数为待比较的数组，返回值为布尔类型

var arr = [3,4,5, ['a','b',3]];
var arr2 = [3,4,5, ['a','b',3]];
var arr3 = [3,4,5];

Array.prototype.equal=function(arr){
	var str1 = JSON.stringify(this);//[3,4,5,["a","b",3]]
	//var str1 = this.toString()//3,4,5,a,b,3
	var str2 = JSON.stringify(arr);//[3,4,5,["a","b",3]]

	console.log(str1)
	console.log(str2)
	return str1===str2;
};
console.log(arr.equal(arr2))