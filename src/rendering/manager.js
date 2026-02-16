import Manager from 'fibo-html';

const loadImage = (element, data) => {
	element.attrs.push({
		name: 'src',
		value: data.url,
	});

	element.attrs.push({
		name: 'alt',
		value: data.alt,
	});
};

export default new Manager({ 
	callbacks: {
		loadImage,
	}
});
