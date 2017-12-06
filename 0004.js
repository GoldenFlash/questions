// 一、从某数据库接口得到如下值：

var DATA = {
	 rows: [
	  ["Lisa", 16, "Female", "2000-12-01"],
	  ["Bob", 22, "Male", "1996-01-21"]
	 ],
	 metaData: [
	  {name: "name", note: ''},
	  {name: "age", note: ''},
	  {name: "gender", note: ''},
	  {name: "birthday", note: ''}
	 ]
	}
// rows是数据，metaData是对数据的说明。现写一个函数，将上面的Object转化为期望的数组：

// [
//  {name: "Lisa", age: 16, gender: "Female", birthday: "2000-12-01"},
//  {name: "Bob", age: 22, gender: "Male", birthday: "1996-01-21"},
// ]
function render(data){
	var data = data;
	var newArr = [];
	for(var i=0;i<data.rows.length;i++){
		var obj = {};
		for(var j=0;j<data.rows[i].length;j++){

			var type = data.metaData[j].name;

			obj[type] = data.rows[i][j]
		};
		newArr.push(obj)
	};
	return newArr;
};
console.log(render(DATA))