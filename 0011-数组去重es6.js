function equalArr(arr){
	var set = new Set(arr);
	var newArr = Array.from(set);
	console.log(set)
	return newArr;
}
console.log(equalArr([7,9,7,1,1,2,3,2,3,4,]))