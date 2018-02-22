var $ = window.$

$(document).ready(() => {
  $('.main-carousel').flickity({
    wrapAround: true,
    autoPlay: 3500, // Rotate images every 3.5 seconds
    contain: true,
    imagesLoaded: true,
    pageDots: false
  })
})
