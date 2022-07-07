(function () {
	let clock = document.getElementById('clock');
	let finishHour = new Date();
	finishHour.setHours(16, 0, 0);

	function countdown() {
		let now = new Date();
		let timeoutComplete = false;

		now > finishHour ? (timeoutComplete = true) : (timeoutComplete = false);

		if (timeoutComplete === true) {
			clock.classList.add('complete');
			clock.innerText = 'Fajrant';

			setTimeout(countdown, 1000);
			return;
		} else {
			clock.classList.remove('complete');
		}

		let remaining = (finishHour - now) / 1000;
		let hours = Math.floor((remaining / 60 / 60) % 60);

		let minutes = Math.floor((remaining / 60) % 60);
		if (minutes < 10) minutes = '0' + minutes;

		let seconds = Math.floor(remaining % 60);
		if (seconds < 10) seconds = '0' + seconds;

		clock.innerText = hours + ' : ' + minutes + ' : ' + seconds;
		setTimeout(countdown, 1000);
	}

	document.addEventListener('DOMContentLoaded', countdown);
})();
