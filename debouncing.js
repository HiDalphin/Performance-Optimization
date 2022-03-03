let count = 0;
function getSearchResult(e) {
	console.log(e.target.value, ' Make ajax request', count++);
}

const debouncing = function (fn, delay) {
	let timer;
	return function () {
		let context = this, args = arguments;
		clearTimeout(timer);
		timer = setTimeout(function () {
			fn.apply(context, args);
		}, delay)
	}
}

const handleOnKeyup = debouncing(getSearchResult, 300);