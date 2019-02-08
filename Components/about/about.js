const team = {
  andrew: {
    name: "Andrew Ghobrial",
    position: "Scrum Master",
    img: "./assets/imgs/andrew.jpg"
  },
  jarrad: {
    name: "Jarrad Miller",
    position: "Back End Architect",
    img: "./assets/imgs/jarrad.jpg"
  },
  orlando: {
    name: "Orlando Lopez",
    position: "Front End Architect 1",
    img: "./assets/imgs/orlando.png"
  },
  randy: {
    name: "Randy Wilson",
    position: "Front End Architect 2",
    img: "./assets/imgs/randy.jpg"
  },
  rory: {
    name: "Rory Hennessey",
    position: "UI Developer 1",
    img: "./assets/imgs/rory.jpg"
  },
  brian: {
    name: "Brian Illes",
    position: "UI Developer 2",
    img: "./assets/imgs/brian.jpg"
  },
  adam: {
    name: "Adam Mathieson",
    position: "UI Developer 3",
    img: "./assets/imgs/adam.png"
  }
};

// Array of names
const teamArr = Object.keys(team);

// maps through array teamArr and adds content
teamArr.map(i => {
  document.querySelector(`.${i} .name`).textContent = team[`${i}`]["name"];
  document.querySelector(`.${i} .position`).textContent =
    team[`${i}`]["position"];
  document.querySelector(`.${i} img`).src = team[`${i}`]["img"];
});

// Team member class w/ seeMore() method
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
