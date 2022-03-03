let obj = {
	firstName: 'Sudha',
	lastName: 'Dalphin'
};
function fullName(state, country) {
	console.log(this.firstName + " " + this.lastName, " from " + state + ", " + country);
}

var displayFullName = fullName.bind(obj, 'Tirunelveli');
displayFullName('Tamilnadu');

Function.prototype.customBind = function (...args) {
	var self = this,
		params = args.slice(1);
	return (...args2) => {
		self.apply(args[0], [...params, ...args2]);
	}
}

var displayFullName1 = fullName.customBind(obj);
displayFullName1('Tirunelveli', 'Tamilnadu');