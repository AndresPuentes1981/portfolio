//Tostadita
const toastLiveExample = document.getElementById('liveToast')
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
toastBootstrap.show()


//PopOver
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//Inicialización del componente Carousel
const myCarouselElement = document.querySelector('#carouseliaArt')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

// Modal
document.querySelectorAll('.img-thumbnail-modal').forEach(img => {
  img.addEventListener('click', function () {
    const src = this.getAttribute('data-imgsrc');
    document.getElementById('modalImage').src = src;
  });
});