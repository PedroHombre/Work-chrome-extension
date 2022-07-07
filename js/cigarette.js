(function () {
	let firstCig = new Date();
	firstCig.setHours(10, 0, 0);

	let secondCig = new Date();
	secondCig.setHours(12, 0, 0);

	let thirdCig = new Date();
	thirdCig.setHours(14, 0, 0);

	let firstCigClock = document.getElementById('first');
	let secondCigClock = document.getElementById('second');
	let thirdCigClock = document.getElementById('third');

	let completeText = 'F';

	function countdownCig() {
		let now = new Date();
		let cigWindow = 10;

		let isFirstCountdownComplete = false;
		let isSecondCountdownComplete = false;
		let isThirdCountdownComplete = false;

		// First countdown timet
		now > firstCig
			? (isFirstCountdownComplete = true)
			: (isFirstCountdownComplete = false);

		now > secondCig
			? (isSecondCountdownComplete = true)
			: (isSecondCountdownComplete = false);

		now > thirdCig
			? (isThirdCountdownComplete = true)
			: (isThirdCountdownComplete = false);

		let firstCigRemaining = (firstCig - now) / 1000;
		let secondCigRemaining = (secondCig - now) / 1000;
		let thirdCigRemaining = (thirdCig - now) / 1000;

		// Counting remaining hours
		let firstCigHours = Math.floor((firstCigRemaining / 60 / 60) % 60);
		let secondCigHours = Math.floor((secondCigRemaining / 60 / 60) % 60);
		let thirdCigHours = Math.floor((thirdCigRemaining / 60 / 60) % 60);

		// Counting remaining minutes
		let firstCigMinutes = Math.floor((firstCigRemaining / 60) % 60);
		if (firstCigMinutes < 10) firstCigMinutes = '0' + firstCigMinutes;

		let secondCigMinutes = Math.floor((secondCigRemaining / 60) % 60);
		if (secondCigMinutes < 10) secondCigMinutes = '0' + secondCigMinutes;

		let thirdCigMinutes = Math.floor((thirdCigRemaining / 60) % 60);
		if (thirdCigMinutes < 10) thirdCigMinutes = '0' + thirdCigMinutes;

		// Counting remaining seconds
		let firstCigSeconds = Math.floor(firstCigRemaining % 60);
		if (firstCigSeconds < 10) firstCigSeconds = '0' + firstCigSeconds;

		let secondCigSeconds = Math.floor(secondCigRemaining % 60);
		if (secondCigSeconds < 10) secondCigSeconds = '0' + secondCigSeconds;

		let thirdCigSeconds = Math.floor(thirdCigRemaining % 60);
		if (thirdCigSeconds < 10) thirdCigSeconds = '0' + thirdCigSeconds;

		if (!isFirstCountdownComplete) {
			firstCigClock.innerText =
				firstCigHours +
				' : ' +
				firstCigMinutes +
				' : ' +
				firstCigSeconds;
		} else {
			firstCigClock.innerText = completeText;
		}

		if (!isSecondCountdownComplete) {
			secondCigClock.innerText =
				secondCigHours +
				' : ' +
				secondCigMinutes +
				' : ' +
				secondCigSeconds;
		} else {
			secondCigClock.innerText = completeText;
		}

		if (!isThirdCountdownComplete) {
			thirdCigClock.innerText =
				thirdCigHours +
				' : ' +
				thirdCigMinutes +
				' : ' +
				thirdCigSeconds;
		} else {
			thirdCigClock.innerText = completeText;
		}

		setTimeout(countdownCig, 1000);
	}

	document.addEventListener('DOMContentLoaded', countdownCig);
})();
