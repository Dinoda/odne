const anchors = document.getElementById('anchors');

const anchorButton = anchors.querySelector('.anchors-btn');

anchorButton.addEventListener('click', () => {
	anchors.classList.toggle('open');
});

const anchorList = anchors.querySelector('.anchor-list');

anchorList.addEventListener('click', () => {
	anchors.classList.remove('open');
});
