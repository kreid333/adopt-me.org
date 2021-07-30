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
