// 1. 写一个 byField 函数，实现数组按姓名、年纪、任意字段排序
var users = [
  { name: "John", age: 20, company: "Baidu" },
  { name: "bnn", age: 15, company: "Aecent" },
  { name: "Pete", age: 18, company: "Alibaba" },
  { name: "Ann", age: 19, company: "Tecent" },
]
function byField(field){
	return function(user1,user2){
		if(user2[field]<user1[field]){
			return 1;
		}else if(user2[field]<user1[field]){
			return -1;
		}else{
			return 0;
		};
	}
}

users.sort(byField('company'))
console.log(users)