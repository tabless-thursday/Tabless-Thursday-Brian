class TeamMember {
  constructor(element) {
    this.element = element;
    console.log(element);
    this.seeMoreButton = document.querySelector(".seeMoreButton");
    console.log(this.seeMoreButton);
    this.seeMoreButton.addEventListener("click", () => this.seeMore());
  }
  seeMore() {
    this.element.classList.remove("hidden");
    this.seeMoreButton.style.display = "none";
  }
}

const persons = document.querySelectorAll(".person-card");
console.log(persons);
persons.forEach(person => new TeamMember(person));
