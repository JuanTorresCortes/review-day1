const returnEmptyString = function () {
	return "";
};

const returnZeroNumber = function () {
	return 0;
};

const returnEmptyArray = function () {
	return [];
};

const returnEmptyObject = function () {
	return {};
};

const returnAbcString = function (value) {
	return value;
};


const returnSumOfTen = function (arg1, arg2) {
	let result = arg1 + arg2;
	return result;	
};

const subtraction = function (arg1, arg2) {
	let result = arg1 - arg2;
	return result;
};

const multiplication = function (arg1, arg2) {
	let result = arg1 * arg2;
	return result;
};

const division = function (arg1, arg2) {
	let result = arg1 / arg2;
	return result;
};

const returnArray = function (arg1) {
	return arg1;
};

const returnFirstIndex = function (arg1) {
	let first = arg1[0];
	return first;
};

const returnSecondIndex = function (arg1) {
	let second = arg1[1];
	return second;
};

const returnArrayLength = function (arg1) {
	let length = arg1.length
	return length;
};

const arraySum = function (arg1) {
	const sumArr = arg1.reduce((acc, value) => 
		acc + value, 0
	)
	return sumArr;
};

const arraySubtraction = function (arg1) {
	const subtractArr = arg1.reduce((acc, value) => 
		acc - value, 0
	)
	return subtractArr;
};

const multiplicationArray = function (arg1) {
	const multiplyArr = arg1.reduce((acc, value) => 
		acc * value, 1
	)
	return multiplyArr;
};

const divisionArray = function (arg1) {
	const divisionArr = arg1.reduce((acc, value) => 
		acc / value, 1
	)
	let result = Math.round(divisionArr * 1000)/1000;
	return result
};

const oddArray = function (arg1) {
	let result = arg1.filter(num => num % 2 !== 0);
	return result
};

const evenArray = function (arg1) {
	let result = arg1.filter(num => num % 2 === 0);
	return result
};

const returnFruits = function (arg1) {
	let leftFruit = arg1[0];
	let rightFruit = arg1[arg1.length -1];
	return [leftFruit,rightFruit];
};
