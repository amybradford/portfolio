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

// fade-in animations - watched tutorial by kevin powell
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 1,
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      // stop looking at something once you've done your job
      appearOnScroll.unobserve(entry.target);
    }
  })
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})
