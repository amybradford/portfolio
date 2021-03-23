// image slider js - used "https://flickity.metafizzy.co/#new-flickity-v2-2"
const elem = document.querySelector('.main-carousel');
const flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
});
