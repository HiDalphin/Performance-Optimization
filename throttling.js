let count = 0;
function getSearchResult(e) {
	console.log(e.target.value, ' Make ajax request', count++);
}

const throttling = function (fn, delay) {
	let flag = true;
	return function () {
		let context = this, args = arguments;
		if (flag) {
			fn.apply(context, args);
			flag = false;
			setTimeout(function () {
				flag = true;
			}, delay)
		}
	}
}

const handleOnKeyup = throttling(getSearchResult, 1000);