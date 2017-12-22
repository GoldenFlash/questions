function bucket(arr){
	var obj = {}
	var newArr = [];
	arr.forEach(function(item){
		if(!obj[item]){
			obj[item] = item;
		}
	})
	
	for(var key in obj){
		newArr.push(obj[key])
	}
	
	return newArr;
}
console.log(bucket(['a','b',1,6,6,8,6,'c']))