const tabs = document.querySelectorAll('.tab');

for (const tab of tabs) {
	tab.addEventListener('click', () => {
		tab.classList.toggle('open');
	});
}
