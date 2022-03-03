function add(num1) {
	return function (num2) {
		if (num2) {
			return add(num1 + num2);
		}
		return num1;
	}
}
const addResult = add(1)(2)(15)(5)(2)(7)
console.log(addResult());

const add1 = num1 => (num2) => num2 ? add(num1 + num2) : num1;

const addResult1 = add1(1)(2)(15)(5)(2)(7)
console.log(addResult1());