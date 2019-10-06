
const menu = () => {
  let menuContainer = document.createElement('div');
  menuContainer.classList.add('card-group');

  // first menu
  let firstMenu = document.createElement('div');
  firstMenu.classList.add('card');

  let firstMenuImage = document.createElement('img');
  firstMenuImage.src = './assets/menu1.jpg';
  firstMenuImage.alt = 'First Menu Image';
  firstMenuImage.classList.add(card-img-top);

  let firstMenuBody = document.createElement('div');
  firstMenuBody.classList.add(card-body);

  let firstMenuBodyTitle = document.createElement('h5');
  firstMenuBodyTitle.classList.add('card-title');
  firstMenuBodyTitle.innerText = 'Kabab Item';

  let firstMenuBodyText = document.createElement('p');
  firstMenuBodyText.classList.add('card-text');
  firstMenuBodyText.innerText = 'We have more than 30 variations of kabab that are familier in                                    different countries';
  firstMenuBody.appendChild(firstMenuBodyTitle);
  firstMenuBody.appendChild(firstMenuBodyText);
  firstMenu.appendChild(firstMenuImage);
  firstMenu.appendChild(firstMenuBody);

  // second menu
  let secondMenu = document.createElement('div');
  secondMenu.classList.add('card');

  let secondMenuImage = document.createElement('img');
  secondMenuImage.src = './assets/menu1.jpg';
  secondMenuImage.alt = 'second Menu Image';
  secondMenuImage.classList.add(card-img-top);

  let secondMenuBody = document.createElement('div');
  secondMenuBody.classList.add(card-body);

  let secondMenuBodyTitle = document.createElement('h5');
  secondMenuBodyTitle.classList.add('card-title');
  secondMenuBodyTitle.innerText = 'Kabab Item';

  let secondMenuBodyText = document.createElement('p');
  secondMenuBodyText.classList.add('card-text');
  secondMenuBodyText.innerText = 'We have more than 30 variations of kabab that are familier in                                    different countries';
  secondMenuBody.appendChild(secondMenuBodyTitle);
  secondMenuBody.appendChild(secondMenuBodyText);
  secondMenu.appendChild(secondMenuImage);
  secondMenu.appendChild(secondMenuBody);

  // third menu
  let thirdMenu = document.createElement('div');
  thirdMenu.classList.add('card');

  let thirdMenuImage = document.createElement('img');
  thirdMenuImage.src = './assets/menu1.jpg';
  thirdMenuImage.alt = 'third Menu Image';
  thirdMenuImage.classList.add(card-img-top);

  let thirdMenuBody = document.createElement('div');
  thirdMenuBody.classList.add(card-body);

  let thirdMenuBodyTitle = document.createElement('h5');
  thirdMenuBodyTitle.classList.add('card-title');
  thirdMenuBodyTitle.innerText = 'Kabab Item';

  let thirdMenuBodyText = document.createElement('p');
  thirdMenuBodyText.classList.add('card-text');
  thirdMenuBodyText.innerText = 'We have more than 30 variations of kabab that are familier in                                        different countries';
  thirdMenuBody.appendChild(thirdMenuBodyTitle);
  thirdMenuBody.appendChild(thirdMenuBodyText);
  thirdMenu.appendChild(thirdMenuImage);
  thirdMenu.appendChild(thirdMenuBody);

  menuContainer.appendChild(firstMenu);
  menuContainer.appendChild(secondMenu);
  menuContainer.appendChild(thirdMenu);
};