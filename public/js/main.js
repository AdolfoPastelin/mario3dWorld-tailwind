//Select the menu (<a> tag)
const menuButton = document.querySelector('#mobile-menu');

//Change visibility between mobile menu (hidden -> visible)
menuButton.addEventListener('click', () => {
	const menu = document.querySelector('.mobile-links');
	menu.classList.toggle('hidden');
});