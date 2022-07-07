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

// Initiate conversion variables
let pxConversion = true;
let emConversion = false;

// Listen for input in PX to EM field and adjust calculation mode
inputS.addEventListener('input', () => {
	if (inputS.value != '') {
		pxConversion = true;
		emConversion = false;

		inputSE.value = '';
	}
});

// Listen for input in EM to PX field and adjust calculation mode
inputSE.addEventListener('input', () => {
	pxConversion = false;
	emConversion = true;

	inputS.value = '';
});

// Run copyToClipboard function when result tag is clicked
outputWrapper.addEventListener('click', copyToClipboard);

// Function calculatin Em and Px values
function calculate() {
	// Initiate valueSecond variable
	let valueSecond;

	// Get default font size input's field value
	let valueFirst = inputF.value;

	// Obtain values from inputs according to calculation type
	pxConversion === true
		? (valueSecond = inputS.value)
		: (valueSecond = inputSE.value);

	// Trim witespace from data
	valueFirst = valueFirst.trim();
	valueSecond = valueSecond.trim();

	// Parse result to float type
	valueFirst = parseFloat(valueFirst);
	valueSecond = parseFloat(valueSecond);

	// Calculate result according to calculation type
	let result;
	pxConversion === true
		? (result = valueSecond / valueFirst)
		: (result = valueFirst * valueSecond);

	// If there isn's a result set result to 0
	if (Number.isNaN(result)) result = 0;

	// Set data type for result display according to calculaion type
	let type;
	pxConversion === true ? (type = 'em') : (type = 'px');

	// Display result
	output.innerHTML =
		resultMsg + ' <span id="resultCopy">' + result + type + '</span>';

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
