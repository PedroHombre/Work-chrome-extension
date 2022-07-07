(function () {
	let firstCig = new Date();
	firstCig.setHours(10, 0, 0);

	let secondCig = new Date();
	secondCig.setHours(12, 0, 0);

	let thirdCig = new Date();
	thirdCig.setHours(14, 0, 0);

	let cigWindow = 10;

	let firstCigWindow = new Date();
	firstCigWindow.setHours(10, cigWindow, 0);

	let secondCigWindow = new Date();
	secondCigWindow.setHours(12, cigWindow, 0);

	let thirdCigWindow = new Date();
	thirdCigWindow.setHours(14, cigWindow, 0);

	let firstCigClock = document.getElementById('first');
	let secondCigClock = document.getElementById('second');
	let thirdCigClock = document.getElementById('third');

	let completeText = 'czas minął';
	let completeWindowText = 'czas na petka';

	function firstCigCountdown(time) {
		let now = time;

		let isFirstCountdownComplete = false;

		now >= firstCig
			? (isFirstCountdownComplete = true)
			: (isFirstCountdownComplete = false);

		let firstCigRemaining = (firstCig - now) / 1000;

		let firstCigHours = Math.floor((firstCigRemaining / 60 / 60) % 60);

		let firstCigMinutes = Math.floor((firstCigRemaining / 60) % 60);
		if (firstCigMinutes < 10) firstCigMinutes = '0' + firstCigMinutes;

		let firstCigSeconds = Math.floor(firstCigRemaining % 60);
		if (firstCigSeconds < 10) firstCigSeconds = '0' + firstCigSeconds;

		if (!isFirstCountdownComplete) {
			firstCigClock.innerText =
				firstCigHours +
				' : ' +
				firstCigMinutes +
				' : ' +
				firstCigSeconds;
		} else if (now >= firstCig && now <= firstCigWindow) {
			firstCigClock.innerText = completeWindowText;
		} else {
			firstCigClock.innerText = completeText;
		}
	}

	function secondCigCountdown(time) {
		let now = time;

		let isSecondCountdownComplete = false;

		now >= secondCig
			? (isSecondCountdownComplete = true)
			: (isSecondCountdownComplete = false);

		let secondCigRemaining = (secondCig - now) / 1000;

		let secondCigHours = Math.floor((secondCigRemaining / 60 / 60) % 60);

		let secondCigMinutes = Math.floor((secondCigRemaining / 60) % 60);
		if (secondCigMinutes < 10) secondCigMinutes = '0' + secondCigMinutes;

		let secondCigSeconds = Math.floor(secondCigRemaining % 60);
		if (secondCigSeconds < 10) secondCigSeconds = '0' + secondCigSeconds;

		if (!isSecondCountdownComplete) {
			secondCigClock.innerText =
				secondCigHours +
				' : ' +
				secondCigMinutes +
				' : ' +
				secondCigSeconds;
		} else if (now >= secondCig && now <= secondCigWindow) {
			secondCigClock.innerText = completeWindowText;
		} else {
			secondCigClock.innerText = completeText;
		}
	}

	function thirdCigCountdown(time) {
		let now = time;

		let isThirdCountdownComplete = false;

		now >= thirdCig
			? (isThirdCountdownComplete = true)
			: (isThirdCountdownComplete = false);

		let thirdCigRemaining = (thirdCig - now) / 1000;

		let thirdCigHours = Math.floor((thirdCigRemaining / 60 / 60) % 60);

		let thirdCigMinutes = Math.floor((thirdCigRemaining / 60) % 60);
		if (thirdCigMinutes < 10) thirdCigMinutes = '0' + thirdCigMinutes;

		let thirdCigSeconds = Math.floor(thirdCigRemaining % 60);
		if (thirdCigSeconds < 10) thirdCigSeconds = '0' + thirdCigSeconds;

		if (!isThirdCountdownComplete) {
			thirdCigClock.innerText =
				thirdCigHours +
				' : ' +
				thirdCigMinutes +
				' : ' +
				thirdCigSeconds;
		} else if (now >= thirdCig && now <= thirdCigWindow) {
			thirdCigClock.innerText = completeWindowText;
		} else {
			thirdCigClock.innerText = completeText;
		}
	}

	function countdownCigs() {
		let now = new Date();

		firstCigCountdown(now);
		secondCigCountdown(now);
		thirdCigCountdown(now);

		setTimeout(countdownCigs, 1000);
	}

	document.addEventListener('DOMContentLoaded', countdownCigs);
})();
