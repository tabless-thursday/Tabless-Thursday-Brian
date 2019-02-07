//Mobile menu
const toggleMenu = () => {
  headerContainer.classList.toggle("menu-active");
};

const headerContainer = document.querySelector(".header-container");

const menuBtn = document.querySelector(".fa-bars");

menuBtn.addEventListener("click", () => toggleMenu());
