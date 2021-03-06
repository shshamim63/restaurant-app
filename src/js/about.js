import imageAbout from '../assets/about.jpg';

const aboutSection = () => {
  const base = document.querySelector('.content');
  document.querySelector('#about').classList.add('activeheader');
  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('container', 'mt-3', 'mb-3');

  const aboutHeading = document.createElement('h2');
  aboutHeading.classList.add('text-center');
  aboutHeading.innerText = 'About Us';

  const aboutRowContainer = document.createElement('div');
  aboutRowContainer.classList.add('row');

  const aboutImageContainer = document.createElement('div');
  aboutImageContainer.classList.add('col-sm');

  const aboutImage = document.createElement('img');
  aboutImage.src = imageAbout;
  aboutImage.alt = 'About image';
  aboutImage.classList.add('about-img');

  const aboutTextContainer = document.createElement('div');
  aboutTextContainer.classList.add('col-sm');
  const aboutText = document.createElement('p');
  aboutText.classList.add('about-p', 'text-center');
  aboutText.innerHTML = 'The grillspot serves a wide selection of kabab item,                                             such as Sosatie, Lyulya kebab and Tikka kebab. In addition, our kabab                            chefs exhibit many modern interpretations and innovations of kabab dishes                        in our specialty signature rolls. We take pride and passion in serving                           this artistic culinary form. The exclusive use of high quality and fresh                         ingredients is our top priority.';
  aboutTextContainer.appendChild(aboutText);
  aboutImageContainer.appendChild(aboutImage);
  aboutRowContainer.appendChild(aboutTextContainer);
  aboutRowContainer.appendChild(aboutImageContainer);
  aboutContainer.appendChild(aboutHeading);
  aboutContainer.appendChild(aboutRowContainer);
  base.appendChild(aboutContainer);
};
export default aboutSection;
