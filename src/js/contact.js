const contact = () => {
  const base = document.querySelector('.content');
  document.querySelector('#contact').classList.add('activeheader');
  let container = document.createElement('div');
  container.classList.add('container', 'mt-3', 'mb-3');

  let contactContainer = document.createElement('div');
  contactContainer.classList.add('row');

  let contactContainerInfo = document.createElement('div');
  contactContainerInfo.classList.add('col', 'border-right', 'border-dark');

  let placeName = document.createElement('h5');
  placeName.classList.add('text-center');
  placeName.innerHTML = 'The Grillspot';

  let address = document.createElement('p');
  address.classList.add('text-center');
  address.innerHTML = 'Mohammadpur, Dhaka, Bangladesh';

  let email = document.createElement('p');
  email.classList.add('text-center');
  email.innerHTML = 'E-mail: thegrillspot@gmail.com';

  let phone = document.createElement('p');
  phone.classList.add('text-center');
  phone.innerHTML = 'Phone: XXX-XXXX-XXXX';

  let contactContainerForm = document.createElement('div');
  contactContainerForm.classList.add('col-7', 'border-left', 'border-dark');

  let contactFormInfo = document.createElement('p');
  contactFormInfo.innerHTML = 'Message us to share your thought';
  contactFormInfo.classList.add('text-center');
  let messageform = document.createElement('form');

  let emailPortion = document.createElement('div');
  emailPortion.classList.add('form-group');

  let emailPortionInput = document.createElement('input');
  emailPortionInput.setAttribute('type', 'email');
  emailPortionInput.setAttribute('placeholder', 'Enter mail address');
  emailPortionInput.classList.add('form-control');

  let textPortion = document.createElement('div');
  textPortion.classList.add('form-group');

  let textPortionInput = document.createElement('textarea');
  textPortionInput.classList.add('form-control');
  textPortionInput.placeholder = 'Message...'
  textPortionInput.rows = '3';

  let submitButton = document.createElement('button');
  submitButton.classList.add('btn', 'btn-primary');
  submitButton.type = 'submit';
  submitButton.innerHTML = 'Send'; 

  contactContainerInfo.appendChild(placeName);
  contactContainerInfo.appendChild(address);
  contactContainerInfo.appendChild(email);
  contactContainerInfo.appendChild(phone);

  emailPortion.appendChild(emailPortionInput);
  messageform.appendChild(emailPortion);
  textPortion.appendChild(textPortionInput);
  messageform.appendChild(textPortion);
  messageform.appendChild(submitButton);
  contactContainerForm.appendChild(contactFormInfo);
  contactContainerForm.appendChild(messageform);

  contactContainer.appendChild(contactContainerInfo);
  contactContainer.appendChild(contactContainerForm);

  container.appendChild(contactContainer);
  base.appendChild(container);
};
export default contact;
