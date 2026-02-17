import displayOverlay from './overlay.js';

const images = document.querySelectorAll('img');

for (const image of images) {
	image.addEventListener('click', () => {
		const display = document.createElement('img');

		display.src = image.src;

		displayOverlay(display);
	});
}

