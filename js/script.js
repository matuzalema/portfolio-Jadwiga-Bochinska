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
      2000
    );
    return false;
  });
});

// mobile nav
const bar = document.querySelector(".hamburger-wrapper");
const navigationLink = document.querySelectorAll("header>nav>ul>li>a");
const topNav = document.querySelector(".top-nav");

bar.addEventListener("click", () => {
  topNav.classList.add("flex");
});

topNav.addEventListener("click", function() {
  topNav.classList.remove("flex");
});

navigationLink.forEach(item => {
  item.addEventListener("click", function() {
    topNav.classList.remove("flex");
  });
});
