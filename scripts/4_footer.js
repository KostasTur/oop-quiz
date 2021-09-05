//variables
const footer = document.querySelector('footer');
const currentYear = document.querySelector('#current-year');

//functions
const addBackground = () => {
  //changing footer bakcground color based on page
  if (location.href.includes('index.html'))
    footer.style.backgroundColor = 'var(--dark-color)';
  if (location.href.includes('html.html'))
    footer.style.backgroundColor = 'var(--html-color)';
  if (location.href.includes('css.html'))
    footer.style.backgroundColor = 'var(--css-color)';
  if (location.href.includes('js.html'))
    footer.style.backgroundColor = 'var(--js-color)';
};

const addDate = () => (currentYear.innerText = `${new Date().getFullYear()}`);
//events
document.addEventListener('DOMContentLoaded', () => {
  addBackground();
  addDate();
});
