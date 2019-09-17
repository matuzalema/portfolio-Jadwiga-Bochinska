/*----------Animate items-----------*/
window.sr = ScrollReveal();
sr.reveal(".first-header", {
  delay: 500,
  duration: 2000,
  mobile: true
});

sr.reveal(".header-desc", {
  delay: 2000,
  mobile: true,
  duration: 2000
});

sr.reveal(".fa-comments", {
  delay: 1000,
  mobile: true,
  duration: 2000
});

sr.reveal(".project-links", {
  delay: 1000,
  mobile: true,
  duration: 2000
});

sr.reveal("input", {
  delay: 1000,
  mobile: true,
  duration: 2000
});

sr.reveal("textarea", {
  delay: 500,
  mobile: true,
  duration: 2000
});

sr.reveal(".fa-angle-double-down", {
  delay: 3000,
  mobile: true,
  duration: 4000
});

sr.reveal(".hexagon", {
  delay: 1000,
  mobile: true,
  duration: 2000
});

/*--------------scroll site---------------------*/

$(document).ready(function() {
  $('a[href^="#"]').click(function() {
    var hash = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      1500
    );
    return false;
  });
});
