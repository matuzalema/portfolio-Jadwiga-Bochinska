/*----------Animate items-----------*/
window.sr = ScrollReveal();
sr.reveal(".main-header", {
  delay: 800,
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

sr.reveal(".fa-angle-double-down", {
  delay: 3000,
  mobile: true,
  duration: 4000
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

// mobile nav
const bar = document.querySelector(".hamburger");
const navigation = document.querySelector(".top-nav");
const linkNav = document.querySelectorAll(".nav-a");


bar.addEventListener("click", function() {
  navigation.classList.remove("not-visible");
});

navigation.addEventListener("click", function(){
  navigation.classList.add("not-visible");
});

for(let i=0; i<linkNav.length; i++){
  linkNav[i].addEventListener("click", function(){
    navigation.classList.add("not-visible");
  })
}