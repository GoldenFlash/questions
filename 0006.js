
// 三、数组

var a = [
{id:10001, name: "Lisa", age: 16},
{id:10002, name: "Bob", age: 22},
{id:10003, name: "Alice", age: 20}
];
// 数组

var b = [
{id:10001, gender: "Female"},
{id:10002, name: "Bob King", birthday: "1996-01-22"},
{id:10005, name: "Tom", birthday: "2000-01-01"}
];
// 写一个函数按id用b更新a,期望得到的结果为：

// [
// {id: 10001, name: "Lisa", age: 16, gender: "Female"},
// {id: 10002, name: "Bob King", birthday: "1996-01-22", age: 22},
// {id: 10003, name: "Alice", age: 20},
// {id: 10005, name: "Tom", birthday: "2000-01-01"},
// ]
function combine(a,b){
	var newArr = JSON.parse(JSON.stringify(a))
	for(var i=0;i<a.length;i++){
		console.log(i)
		if(a[i].id === b[i].id){
			for(key in b[i]){
				newArr[i][key]=b[i][key]
			};
		}else{
			newArr.push(b[i])
		};
	};
	return newArr;
};
console.log(combine(a,b))