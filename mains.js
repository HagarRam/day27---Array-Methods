//ex2 - map()
//1
function first() {
	const z = [1, 2, 3, 4, 5];
	const doubleZ = z.map((number) => (number = number * number));
	console.log(doubleZ);
}

//2
function second() {
	const ages = [20, 22, 27, 25, 29];
	const newArr = ages.map((age) => `my age is ${age}`);
	console.log(newArr);
}

//3
function third() {
	const employees = [
		{ name: 'John', age: 25 },
		{ name: 'Jane', age: 30 },
		{ name: 'Bob', age: 35 },
	];
	const newArr = employees.map((names) => names.name.toUpperCase());
	console.log(newArr);
}
third();

//4
function four(a) {
	const newArr = a.map((number, index) => number * index);
	console.log(newArr);
}
four([1, 2, 3]);

//5
// function five() {
// 	const input = [
// 		{ name: 'john', age: 13 },
// 		{ name: 'noa', age: 34 },
// 		{ name: 'tom', age: 55 },
// 		{ name: 'big', age: 67 },
// 	];

// }

//EX3 - forEach Practice
//1
function firstForEach() {
	let sum = 0;
	const arr = [1, 2, 3, 4, 5];
	arr.forEach((number) => (sum += number));
	console.log(sum);
}
firstForEach();

//2
function doubleValues(x) {
	x.forEach((number, index) => (x[index] = number * 2));
	console.log(x);
}
doubleValues([1, 2, 3]);
// Is it better to use forEach() or map() in this case? (maps)
//3
function thirdForEach() {
	let arr = ['ar', 'hagar', 'op', 'li'];
	const newArr = arr.map((text) => text.replace(/[aeiou]/gi, 'x'));
	console.log(newArr);
}
thirdForEach();

function checkAge() {
	const employees = [
		{ name: 'John', age: 30 },
		{ name: 'Jane', age: 15 },
		{ name: 'Bob', age: 35 },
	];
	employees.forEach((ages, index) => {
		if (ages.age > 20) {
			console.log(`The person at index ${index} is too young.`);
		}
	});
}
checkAge();

//EX4 - filter Practice
//1
function even() {
	const a = [1, 2, 3, 4, 5];
	const arr = a.filter((even) => even % 2 === 0);
	console.log(arr);
}
even();
//2
function fiveAndGreaterOnly(x) {
	const arr = x.filter((text) => text.length > 4);
	console.log(arr);
}
fiveAndGreaterOnly(['abc', 'akfmvc', 'dfcsc', 'dd']);

//3
function filterClubMembers(x) {
	const arr = x.filter((inclub) => inclub.isClubMember === true);
	return arr;
}
console.log(
	filterClubMembers([
		{ name: 'Angelina Jolie', isClubMember: true },
		{ name: 'Eric Jones', isClubMember: false },
		{ name: 'Paris Hilton', isClubMember: true },
		{ name: 'Kayne West', isClubMember: false },
		{ name: 'Bob Ziroll', isClubMember: true },
	])
);

//EX5 - find Practice
//1
function aboveTen() {
	const array1 = [5, 12, 8, 130, 44];
	const arr = array1.filter((number) => number > 10);
	console.log(arr);
}
aboveTen();

//2
function findStudent() {
	const students = [
		{ name: 'John', age: 22 },
		{ name: 'Jane', age: 23 },
		{ name: 'Bob', age: 24 },
		{ name: 'Alice', age: 25 },
	];
	const newStudent = students.find((names) => names.name === 'John');
	console.log(newStudent);
}
findStudent();

function olderThan23() {
	const students = [
		{ name: 'John', age: 22 },
		{ name: 'Jane', age: 23 },
		{ name: 'Bob', age: 24 },
		{ name: 'Alice', age: 25 },
	];
	const olderthan23 = students.find((ages) => ages.age > 23);
	console.log(olderthan23);
}
olderThan23();

//EX6 - reduce Practice
//1
function sumArray(x) {
	const newArr = x.reduce((abc, current) => abc + current, 0);
	console.log(newArr);
}
sumArray([]);
//2
function calcFactorial(n) {
	return Array.from({ length: n }, (_, i) => i + 1).reduce(
		(acc, curr) => acc * curr,
		1
	);
}
console.log(calcFactorial(6));

//3
function findOldest(x) {
	const arr = x.reduce((acc, max) => {
		if (acc.age > max.age) return acc;
		return max;
	});
	console.log(arr);
}
const students = [
	{ name: 'John', age: 22 },
	{ name: 'Jane', age: 23 },
	{ name: 'Bob', age: 27 },
	{ name: 'Alice', age: 25 },
];
findOldest(students);
