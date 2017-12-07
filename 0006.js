
三、数组

a = [
{id: 10001, name: "Lisa", age: 16},
{id: 10002, name: "Bob", age: 22},
{id: 10003, name: "Alice", age: 20},
];
数组

b = [
{id: 10001, gender: "Female"},
{id: 10002, name: "Bob King", birthday: "1996-01-22"},
{id: 10005, name: "Tom", birthday: "2000-01-01"},
];
写一个函数按id用b更新a,期望得到的结果为：

[
{id: 10001, name: "Lisa", age: 16, gender: "Female"},
{id: 10002, name: "Bob King", birthday: "1996-01-22", age: 22},
{id: 10003, name: "Alice", age: 20},
{id: 10005, name: "Tom", birthday: "2000-01-01"},
]