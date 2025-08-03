const myCarouselElement = document.querySelector('#carouselExampleRide')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 4000,
  touch: true
})