const initialTemplate = () => {
  const base = document.querySelector('.content');

  const header = document.createElement('div');
  header.classList.add('page-header');

  const logo = document.createElement('div');
  logo.classList.add('logo-header');

  const arrowItem = document.createElement('div');
  arrowItem.classList.add('arrow', 'bounce');

  const arrowIcon = document.createElement('h2');
  arrowIcon.classList.add('arrow-property');

  const nav = document.createElement('nav');
  nav.classList.add('bg-success');

  const navList = document.createElement('ul');
  navList.classList.add('nav', 'justify-content-center');

  const listItem1 = document.createElement('li');
  listItem1.classList.add('nav-item', 'menu-item');
  listItem1.id = 'About';
  listItem1.innerHTML = 'About';

  const listItem2 = document.createElement('li');
  listItem2.classList.add('nav-item', 'menu-item');
  listItem2.innerHTML = 'Menu';

  const listItem3 = document.createElement('li');
  listItem3.classList.add('nav-item', 'menu-item');
  listItem3.id = 'Contact';
  listItem3.innerHTML = 'Contact';

  navList.appendChild(listItem1);
  navList.appendChild(listItem2);
  navList.appendChild(listItem3);
  nav.appendChild(navList);

  arrowItem.appendChild(arrowIcon);
  header.appendChild(logo);
  header.appendChild(arrowItem);
  console.log(header);
  base.appendChild(header);
  base.appendChild(nav);
};
export default initialTemplate; 