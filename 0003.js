// 给数组增加 repeat 方法，参数为数组元素内所有重复的次数。该方法返回新数组不修改原数组

var arr = [3,4,5,[6,7]];
//数组深拷贝
// Array.prototype.repeat= function(num){
// 	var arr = this
// 	var newArr =[];
// 	var deepCopy = function(arr){
// 		var newAr = [];
// 		for(var i=0;i<arr.length;i++){
// 			if(Array.isArray(arr[i])){
// 				arguments.callee(arr[i])
// 			}else{
// 				newAr.push(arr[i])
// 			}
// 		}
// 		return newAr
// 	};
// 	arr2 = deepCopy(arr)
// 	console.log(arr2)
// 	newArr = this.concat(arr2)

// 	return newArr;
// }
Array.prototype.repeat=function(num){
	var newArr = [];
	for(var i=0;i<num;i++){
		newArr = newArr.concat(this)
	}
	return newArr;
}
var arr2 = arr.repeat(2);
console.log(arr) //[3,4,5]
console.log(arr2) //[3,4,5,3,4,5]]







