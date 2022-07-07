(function () {
	let clock = document.getElementById('clock');
	let finishHour = new Date();
	finishHour.setHours(16, 0, 0);

	function countdown() {
		let now = new Date();
		if (now > finishHour) finishHour.setDate(finishHour.getDate() + 1);

		let remaining = (finishHour - now) / 1000;
		let hours = Math.floor((remaining / 60 / 60) % 60);
		let minutes = Math.floor((remaining / 60) % 60);
		let seconds = Math.floor(remaining % 60);

		clock.innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
		setTimeout(countdown, 1000);
	}

	document.addEventListener('DOMContentLoaded', countdown);
})();
