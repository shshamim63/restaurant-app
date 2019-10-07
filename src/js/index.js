import initialTemplate from './initialpage.js';
import aboutSection from './about.js';
import menu from './menu.js';
import contact from './contact.js';

initialTemplate();
aboutSection();

const resetMenuSelection = () => {
  document.querySelectorAll('.menu-item').forEach((menuItem) =>	{
		menuItem.classList.remove('activeheader');
	});
};

document.querySelectorAll('.menu-item').forEach((list) => 
	list.addEventListener('click', (e) => {
		resetMenuSelection();
		document.querySelector('.content').removeChild(document.querySelector('.container'));
		switch(e.target.id) {
			case 'about':
				aboutSection();
				break;
			case 'menu':
				menu();
				break;
			case 'contact':
				contact();
				break;
		}
	})
);
