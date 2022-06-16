const scrollLoco = new LocomotiveScroll({
  el: document.querySelector(" [data-scroll-container] "),
  smooth: true,
});
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-sec").forEach((n) =>
  n.addEventListener("click", () => {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
