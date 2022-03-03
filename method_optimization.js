var optimizedMethod = (function () {

	/******************************* PRIVATE METHODS ********************************/
	let _privateVar_1 = null, _privateVar_2 = null, _privateVar_3 = null;

	function _priaveteMethod_X() {
		_privateVar_1 = 'X';
		console.log("Private Method X ::: ");
	}
	function _priaveteMethod_Y() {
		_privateVar_2 = 'Y';
		console.log("Private Method Y ::: ");
	}
	function _priaveteMethod_Z() {
		_privateVar_3 = 'Z';
		console.log("Private Method Z ::: ");
	}
	/******************************* PRIVATE METHODS ********************************/

	/******************************* PUBLIC METHODS ********************************/
	let publicVar = null;
	function publicMethodXYZ() {
		publicVar = 'XYZ';
		_priaveteMethod_X();
		_priaveteMethod_Y();
		_priaveteMethod_Z();
		console.log('Public Method XYZ :::');
	}

	/**
	 * ***************************** PUBLIC METHODS *******************************
	 */
	return {
		publicVar: publicVar,
		publicMethod: publicMethodXYZ
	}
})();

// DOM Ready
$(function () {
	console.log("Public Variable ::: ", optimizedMethod.publicVar)
	console.log("Public Variable ::: ", optimizedMethod.publicMethod());
});