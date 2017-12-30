const obj={a:1,b:2,c:3};
// function foo(o,arr){
// 	//请实现该方法
// }

// foo(obj,["a","c"]);
// 输出 {a:1,c:3}
function foo(obj,arr){
	let {p1,p2} = obj;
	var o ={};
	o[arr[0]] = p1;
	o[arr[1]] = p2;
 	// console.log()
 	return o
}
console.log(foo(obj,["a","c"]));
