const obj={a:1,b:2,c:3};
function foo(o,arr){
	//请实现该方法
}

// foo(obj,["a","c"]);
// 输出 {a:1,c:3}
function foo(obj,arr){
	var q1 = arr[0]
	var q2 = arr[1]
	console.log(q1)
	
	let {arr[0]:a,q2:c} = obj
	console.log(a)
	let o = {q1:a,q2:c}
	console.log(o)
}
foo(obj,["a","c"]);
