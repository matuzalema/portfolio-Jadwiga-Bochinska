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

// particles Animation

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/particles.json", function() {
  console.log("callback - particles.js config loaded");
});
/* ---- particles.js config ---- */

particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 600
      }
    },
    color: {
      value: "#f1ea15"
    },
    shape: {
      type: "triangle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

/* ---- stats.js config ---- */

// var count_particles, stats, update;
// stats = new Stats();
// stats.setMode(0);
// stats.domElement.style.position = "absolute";
// stats.domElement.style.left = "0px";
// stats.domElement.style.top = "0px";
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector(".js-count-particles");
// update = function() {
//   stats.begin();
//   stats.end();
//   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//   }
//   requestAnimationFrame(update);
// };
// requestAnimationFrame(update);

// // tiltepage-scroll
// $(".main").tiltedpage_scroll({
//   sectionContainer: "> section", // In case you don't want to use <section> tag, you can define your won CSS selector here
//   angle: 50, // You can define the angle of the tilted section here. Change this to false if you want to disable the tilted effect. The default value is 50 degrees.
//   opacity: true, // You can toggle the opacity effect with this option. The default value is true
//   scale: true, // You can toggle the scaling effect here as well. The default value is true.
//   outAnimation: true // In case you do not want the out animation, you can toggle this to false. The defaul value is true.
// });
