const imgContainer = document.querySelector('.imgContainer');

const ori = imgContainer.querySelector('.ori');
const hover = imgContainer.querySelector('.hovered');

ori.addEventListener('mouseover', () => {
  hover.style.opacity = '1';
});

ori.addEventListener('mouseout', () => {
  hover.style.opacity = '0';
});