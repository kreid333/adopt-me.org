// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

window.addEventListener("resize", () => {
  if (window.outerWidth > 991 && menu.classList.contains("show")) {
    console.log(menu.classList.remove("show"));
  }
});

// GSAP ANIMATIONS
let timeline = gsap.timeline();

timeline
  .fromTo(
    ".brand",
    {
      x: -300,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3,
    }
  )
  .fromTo(
    ".navigation",
    {
      x: 300,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      delay: 0.5,
      duration: 1.3,
    },
    ">-1.4"
  )
  .fromTo(
    ".hero-text",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      delay: 0.5,
    },
    ">-0.9"
  );
