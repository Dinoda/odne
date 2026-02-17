const body = document.body;

const overlay = document.createElement('div');

overlay.classList = "overlay";
overlay.style.display = "none";

const overlayContent = document.createElement('div');

overlay.appendChild(overlayContent);
body.appendChild(overlay);

overlay.addEventListener('click', () => {
	overlay.style.display = 'none';
	overlayContent.innerHTML = '';
});

export default function displayOverlay(content) {
	overlayContent.appendChild(content);
	overlay.style.display = 'block';
}
