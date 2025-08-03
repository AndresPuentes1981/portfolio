const myCarouselElement = document.querySelector('#carouselExampleRide')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 4000,
  touch: true
})


document.querySelectorAll('.img-thumbnail-modal').forEach(img => {
  img.addEventListener('click', function () {
    const src = this.getAttribute('data-imgsrc');
    document.getElementById('modalImage').src = src;
  });
});

