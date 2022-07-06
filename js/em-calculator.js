document.getElementById('submit').addEventListener('click', calculate);

let output = document.getElementById('result');
let inputF = document.getElementById('inputDefaultSize');
let inputS = document.getElementById('inputSize');
let inputSE = document.getElementById('inputSizeEm');

inputF.value = '16';
inputF.classList.add('filled');

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

output.addEventListener('click', copyToClickboard);

let resultMsg = 'Result:';

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

	console.log(valueFirst);
	console.log(valueSecond);

	let result = valueSecond / valueFirst;

	if (Number.isNaN(result)) result = 0;

	output.innerHTML =
		resultMsg + ' <span id="resultCopy">' + result + 'em</span>';
}

function copyToClickboard() {
	if (!navigator.clipboard) return;

	let copyText = document.getElementById('resultCopy').innerHTML;

	navigator.clipboard.writeText(copyText).then(() => {
		alert('coppied!');
		return;
	});
}
