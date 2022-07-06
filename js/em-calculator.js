document.getElementById('submit').addEventListener('click', calculate);

let output = document.getElementById('result');
let inputF = document.getElementById('inputDefaultSize');
let inputS = document.getElementById('inputSize');

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

	output.innerHTML = resultMsg + ' ' + result;
}
