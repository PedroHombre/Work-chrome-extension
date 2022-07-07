(function () {
	// Find clock element
	let clock = document.getElementById('clock');

	// Get current date
	let finishHour = new Date();

	// Set date's hour to 16:00
	finishHour.setHours(16, 0, 0);

	// Countdown function
	function countdown() {
		// Get current date
		let now = new Date();

		// initiate isCountdownComplete variable
		let isCountdownComplete = false;

		// If countdown is complete set isCountdownComplete to true
		now > finishHour
			? (isCountdownComplete = true)
			: (isCountdownComplete = false);

		// If timeout is complete set text and add style class
		if (isCountdownComplete === true) {
			clock.classList.add('complete');
			clock.innerText = 'Fajrant';

			// Run function again
			setTimeout(countdown, 1000);
			return;
		} else {
			// Remove clock class if countdown is still running
			clock.classList.remove('complete');
		}

		// Remaining time
		let remaining = (finishHour - now) / 1000;

		// Remaining hours;
		let hours = Math.floor((remaining / 60 / 60) % 60);

		// Remaining minutes
		let minutes = Math.floor((remaining / 60) % 60);
		if (minutes < 10) minutes = '0' + minutes;

		// Remaining seconds
		let seconds = Math.floor(remaining % 60);
		if (seconds < 10) seconds = '0' + seconds;

		// Set clock text
		clock.innerText = hours + ' : ' + minutes + ' : ' + seconds;

		// Run function again after timeout
		setTimeout(countdown, 1000);
	}

	// When documents DOM loads start function
	document.addEventListener('DOMContentLoaded', countdown);
})();
