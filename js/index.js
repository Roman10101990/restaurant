window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  const navig = document.querySelector(".navigation");
  navig.classList.toggle("active");
  menuToggle.classList.toggle("active");
}
