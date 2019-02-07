class TeamMember {
  constructor(element) {
    this.element = element;
    this.seeMoreButton = document.querySelector(".seeMoreButton");
    this.seeMoreButton.addEventListener("click", () => this.seeMore());
  }
  seeMore() {
    this.element.classList.remove("hidden");
    this.seeMoreButton.style.display = "none";
  }
}

const persons = document.querySelectorAll(".person-card");
persons.forEach(person => new TeamMember(person));
