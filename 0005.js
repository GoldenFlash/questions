// 二、写一个函数，判断给定的日期是几月的第几周，当月1日属于上一月的，该周计入上一月。   例如：
// 1）输入日期2016-02-01，返回结果为2-1，表示2016年2月1日属于2月的第一周；
// 2）输入日期2016-09-01，返回结果为8-5，表示2016年9月1日属于8月的第五周。

function which(time){
	var time = new Date(time);
	var date = time.getDate();
	var month= 1;
	var week= 0;
	var end ;
	var weekday = time.getDay();
	if(weekday==0){
		weekday = 7;
		end = "日"
	}else{
		end = weekday
	}
	var a = date%7
	var year = time.getFullYear();
	if(date>7){
		if(a<weekday){
			week = Math.floor(date/7)
			
		}else{
			week = Math.ceil(date/7)
			
		}
		month = time.getMonth()+1;
	}else if(date<7){
		if(a<weekday){
			week = Math.floor(date/7)+5
			month = time.getMonth();
		}else{
			week = Math.ceil(date/7)
			month = time.getMonth()+1;
		}
	}
	console.log(year+"第"+month+"月"+"第"+week+"周"+"星期"+end)

}
which("2017-12-1")