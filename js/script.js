const header = document.querySelector('.menu');


document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#fff';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});