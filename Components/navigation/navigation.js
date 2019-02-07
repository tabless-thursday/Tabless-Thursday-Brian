const toggleMenu = () => {
  menu.classList.toggle("menu-active");
};

const menu = document.querySelector(".menu");

const menuBtn = document.querySelector("nav i");

menuBtn.addEventListener("click", () => toggleMenu());
