var $ = window.$

$(document).ready(() => {
  $('#sponsors > div').matchHeight()
  $('img.lazy').removeClass('hidden')
})
