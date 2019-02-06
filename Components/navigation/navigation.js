const toggleMenu = () => {
  menu.classList.toggle("menu");
};

const menu = document.querySelector("nav");

const menuBtn = document.querySelector("nav i");

menuBtn.addEventListener("click", () => toggleMenu());


//Ticker
const ticker = document.getElementsByClassName("ticker");

function getUsers() {
    //res.json must be number
    fetch('tbd')
      .then(res => {
          ticker.textContent = res.json()})
      .catch(err => console.log(er));
}