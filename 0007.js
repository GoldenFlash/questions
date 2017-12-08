// 给定整数 n 和 m，写一个函数 dispatch ，把 1-n 尽量平均地分成m个组
// 如

// var n = 2, m = 2;
// 总共有m组
// 	每组 n/m个元素如果是小数则向下取整=a  x=n-a*m（剩下的个数）前x组元素个数加一
// dispatch(n, m) 得到[[1], [2]];
function dispatch(n,m){
	
	var newArr=[];
	var a= Math.floor(n/m);
	// console.log(a)
	var x=n-a*m;
	var num=0;
	// console.log(x)
	if(x != 0){
		for(var i=0; i<x;i++){
			console.log(i)
			var newArr2=[]
			for(var j=(a+1)*i+1;j<(a+1)*(i+1)+1;j++){
					newArr2.push(j)
					num=j;
			}
			newArr.push(newArr2);
		};
		
		for(var i=x;i<m;i++){
			var newArr3 =[];
			for(j=num+1+a*(i-x);j<num+1+a;j++){
				newArr3.push(j)
			}
			newArr.push(newArr3) 
		};
	}else if(x == 0){
		for(var i=0;i<m;i++){
			var newArr2 = []
			for(var j=1+a*i;j<a*(i+1)+1;j++){
				newArr2.push(j);
			}
			newArr.push(newArr2)
		}
	}
	return newArr;
};
console.log(dispatch(12,3))