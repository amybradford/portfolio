// image slider js - used "https://flickity.metafizzy.co/#new-flickity-v2-2"
const elem = document.querySelector('.main-carousel');
const flkty = new Flickity( elem, {
  // added custom options to slider
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  accessibility: true,
  pageDots: false
});
