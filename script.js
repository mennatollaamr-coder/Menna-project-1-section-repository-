// TASK 7 (feature/add-your-card): add your own object to this array.
const team = [
  { name: "Instructor", role: "Project Lead" }
];

function renderTeam() {
  const list = document.getElementById("team-list");
  list.innerHTML = "";
  team.forEach(function (member) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = "<h3>" + member.name + "</h3><p>" + member.role + "</p>";
    list.appendChild(card);
  });
}

function showGreeting() {
  const hour = new Date().getHours();
  let text = "Good evening.";
  if (hour < 12) text = "Good morning.";
  else if (hour < 18) text = "Good afternoon.";
  document.getElementById("greeting").textContent = text + " Version control keeps this project safe.";
}

// TASK 8 (feature/dark-mode): write the toggle logic here.
// Hint: document.body.classList.toggle("dark")

// TASK 9 (feature/footer): set the current year inside <span id="year">.
// Hint: new Date().getFullYear()

renderTeam();
showGreeting();
