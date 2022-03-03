document.querySelector('#grantParent').addEventListener('click', () => {
	console.log("Grant Parent Clicked!");
}, true);
document.querySelector('#parent').addEventListener('click', () => {
	console.log("Parent Clicked!");
}, false);
document.querySelector('#child').addEventListener('click', () => {
	console.log("Children Clicked!");
}, true); 