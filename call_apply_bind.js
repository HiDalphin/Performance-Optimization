/*********************  CALL, APPLY, BIND **************************/
let obj1 = {
	firstName: 'Dalphin',
	lastName: 'Jesu'
}
function fullName(city, state) {
	console.log(this.firstName + " " + this.lastName + " from " + city + ", " + state);
}

/**
 * @definition: CALL - Pass the reference context along with the single param are used in the Call methods. It will assign a new context[obj1] to the functions[fullName].
 */
let useCall = fullName.call(obj1, "Tirunelveli", "TamilNadu");

/**
 * @definition: APPLY - Pass the reference context along with the array params are used in Apply methods.
 */
let useApply = fullName.apply(obj1, ["Tirunelveli", "TamilNadu"]);

/**
 * @definition: Bind - return a function[useBind contains a returned function] which what we have try to bind, then we can invoke the function by returned function.
 */
let useBind = fullName.bind(obj1, "Tirunelveli", "TamilNadu");
useBind();


/*********************  CALL, APPLY, BIND **************************/
