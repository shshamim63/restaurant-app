import kebabImage from '../assets/menu1.jpg';
import drinkImage from '../assets/drinks.jpg';
import breadImage from '../assets/bread.jpg';

const menu = () => {
  const base = document.querySelector('.content');
  document.querySelector('#menu').classList.add('activeheader');
  const container = document.createElement('div');
  container.classList.add('container', 'mt-3', 'mb-3');

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('card-group');

  const firstMenu = document.createElement('div');
  firstMenu.classList.add('card', 'mr-1');

  const firstMenuImage = document.createElement('img');
  firstMenuImage.src = kebabImage;
  firstMenuImage.alt = 'First Menu Image';
  firstMenuImage.classList.add('card-img-top', 'menu-image');

  const firstMenuBody = document.createElement('div');
  firstMenuBody.classList.add('card-body');

  const firstMenuBodyTitle = document.createElement('h5');
  firstMenuBodyTitle.classList.add('card-title');
  firstMenuBodyTitle.innerText = 'Kebab Item';

  const firstMenuBodyText = document.createElement('p');
  firstMenuBodyText.classList.add('card-text');
  firstMenuBodyText.innerText = 'We have more than 30 variations of kebab that are familier in                                    different countries';
  firstMenuBody.appendChild(firstMenuBodyTitle);
  firstMenuBody.appendChild(firstMenuBodyText);
  firstMenu.appendChild(firstMenuImage);
  firstMenu.appendChild(firstMenuBody);

  const secondMenu = document.createElement('div');
  secondMenu.classList.add('card', 'mr-1');

  const secondMenuImage = document.createElement('img');
  secondMenuImage.src = drinkImage;
  secondMenuImage.alt = 'second Menu Image';
  secondMenuImage.classList.add('card-img-top', 'menu-image');

  const secondMenuBody = document.createElement('div');
  secondMenuBody.classList.add('card-body');

  const secondMenuBodyTitle = document.createElement('h5');
  secondMenuBodyTitle.classList.add('card-title');
  secondMenuBodyTitle.innerText = 'Drinks';

  const secondMenuBodyText = document.createElement('p');
  secondMenuBodyText.classList.add('card-text');
  secondMenuBodyText.innerText = 'Have 25 variation of drink that can take your taste a one step above';
  secondMenuBody.appendChild(secondMenuBodyTitle);
  secondMenuBody.appendChild(secondMenuBodyText);
  secondMenu.appendChild(secondMenuImage);
  secondMenu.appendChild(secondMenuBody);

  const thirdMenu = document.createElement('div');
  thirdMenu.classList.add('card', 'mr-1');

  const thirdMenuImage = document.createElement('img');
  thirdMenuImage.src = breadImage;
  thirdMenuImage.alt = 'third Menu Image';
  thirdMenuImage.classList.add('card-img-top', 'menu-image');

  const thirdMenuBody = document.createElement('div');
  thirdMenuBody.classList.add('card-body');

  const thirdMenuBodyTitle = document.createElement('h5');
  thirdMenuBodyTitle.classList.add('card-title');
  thirdMenuBodyTitle.innerText = 'Bread';

  const thirdMenuBodyText = document.createElement('p');
  thirdMenuBodyText.classList.add('card-text');
  thirdMenuBodyText.innerText = 'over 15 types of crunchy, yummy handmade bread are availabe';
  thirdMenuBody.appendChild(thirdMenuBodyTitle);
  thirdMenuBody.appendChild(thirdMenuBodyText);
  thirdMenu.appendChild(thirdMenuImage);
  thirdMenu.appendChild(thirdMenuBody);

  menuContainer.appendChild(firstMenu);
  menuContainer.appendChild(secondMenu);
  menuContainer.appendChild(thirdMenu);

  container.appendChild(menuContainer);
  base.appendChild(container);
};
export default menu;
