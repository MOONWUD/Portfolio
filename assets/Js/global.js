/*===== header =====*/
let prevScroll = window.scrollY;
$(window).on('scroll', () => {
  let currentScroll = window.scrollY;
  if (prevScroll > currentScroll) {
    $('header').show();

  } else {
    $('header').hide();
    prevScroll = currentScroll;
  }
})