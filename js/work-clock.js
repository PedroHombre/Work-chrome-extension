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
			clock.innerText = 'fajrant';

			setTimeout(countdown, 1000);
			return;
		}

		let remaining = (finishHour - now) / 1000;
		let hours = Math.floor((remaining / 60 / 60) % 60);
		let minutes = Math.floor((remaining / 60) % 60);
		let seconds = Math.floor(remaining % 60);

		clock.innerText = hours + ' : ' + minutes + ' : ' + seconds;
		setTimeout(countdown, 1000);
	}

	document.addEventListener('DOMContentLoaded', countdown);
})();
