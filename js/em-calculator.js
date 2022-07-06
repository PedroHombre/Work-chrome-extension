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
	let valueFirst = inputF.value;
	let valueSecond = inputS.value;

	valueFirst = valueFirst.trim();
	valueSecond = valueSecond.trim();

	valueFirst = parseInt(valueFirst);
	valueSecond = parseInt(valueSecond);

	if (!Number.isInteger(valueFirst)) {
		inputF.classList.add('invalid');

		if (!Number.isInteger(valueSecond)) {
			inputS.classList.add('invalid');
		}
		return;
	}

	let result = valueSecond / valueFirst;

	if (Number.isNaN(result)) result = 0;

	output.innerHTML =
		resultMsg + ' <span id="resultCopy">' + result + 'em</span>';

	outputWrapper.classList.add('calculated');
}

// Function that copies result to clipboard
function copyToClipboard() {
	if (!outputWrapper.classList.contains('calculated')) return;

	if (!navigator.clipboard) return;

	let copyText = document.getElementById('resultCopy').innerHTML;

	navigator.clipboard.writeText(copyText).then(() => {
		alert('coppied!');
		return;
	});
}
