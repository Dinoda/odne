const body = document.body;

const overlay = document.createElement('div');
overlay.classList = 'overlay';
overlay.style.display = 'none';
const imageDisplay = document.createElement('img');

overlay.appendChild(imageDisplay);


overlay.addEventListener('click', () => {
	overlay.style.display = 'none';
});
body.appendChild(overlay);

const images = document.querySelectorAll('img');

images.map((image) => {
	image.addEventListener('click', () => {
		imageDisplay.src = image.src;
		overlay.style.display = 'block';
	});
});

