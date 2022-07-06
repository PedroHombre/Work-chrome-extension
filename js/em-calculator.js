// Run calculate() function when submit button is clicked
document.getElementById('submit').addEventListener('click', calculate);

// Get inputs and result fields
let output = document.getElementById('result');
let outputWrapper = document.getElementById('resultWrapper');
let inputF = document.getElementById('inputDefaultSize');
let inputS = document.getElementById('inputSize');
let inputSE = document.getElementById('inputSizeEm');

// Set default font-size field value and toggle it's class
inputF.value = '16';
inputF.classList.add('filled');

// Set result message
let resultMsg = 'Result:';

// Add filled class to inputs on input event
let inputs = [inputF, inputS, inputSE];
if (inputs.length > 0) {
	inputs.forEach((input) => {
		input.addEventListener('input', () => {
			input.value != ''
				? input.classList.add('filled')
				: input.classList.remove('filled');
		});
	});
}

// Run copyToClipboard function when result tag is clicked
outputWrapper.addEventListener('click', copyToClipboard);

// Function calculatin Em and Px values
function calculate() {
	// Obtain values from inputs
	let valueFirst = inputF.value;
	let valueSecond = inputS.value;

	// Trim witespace from data
	valueFirst = valueFirst.trim();
	valueSecond = valueSecond.trim();

	// Parse result to int type
	valueFirst = parseInt(valueFirst);
	valueSecond = parseInt(valueSecond);

	// If fields contain non number type set class to invalid and abort
	if (!Number.isInteger(valueFirst)) {
		inputF.classList.add('invalid');

		if (!Number.isInteger(valueSecond)) {
			inputS.classList.add('invalid');
		}
		return;
	}

	// Calculate result
	let result = valueSecond / valueFirst;

	// If there isn's a result set result to 0
	if (Number.isNaN(result)) result = 0;

	// Display result
	output.innerHTML =
		resultMsg + ' <span id="resultCopy">' + result + 'em</span>';

	// Add calculated class to result wrapper whan user performs a calculation
	outputWrapper.classList.add('calculated');
}

// Function that copies result to clipboard
function copyToClipboard() {
	// Check if user performed a calculation
	if (!outputWrapper.classList.contains('calculated')) return;

	// Check if navigator.clipboard is supported
	if (!navigator.clipboard) return;

	// Get result contents from HTML tag
	let copyText = document.getElementById('resultCopy').innerHTML;

	// Copy text to clipboard and send an alert
	navigator.clipboard.writeText(copyText).then(() => {
		alert('coppied!');
		return;
	});
}
