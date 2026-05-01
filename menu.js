//GET DOM ELEMENTS
const levelsContainer = document.getElementById("levelsContainer");
const backBtn = document.getElementById("backBtn");

//LOAD UNLOCKED LEVEL
let unlockedLevel = localStorage.getItem("unlockedLevel") || 1;
unlockedLevel = parseInt(unlockedLevel);
// CREATE LEVEL BUTTONS
for (let i = 1; i <= 8; i++) {
//Create a button for each level
  const btn = document.createElement("button");
  btn.textContent = "Level " + i;
  btn.classList.add("levelBtn");
//LOCKED LEVEL LOGIC
  if (i > unlockedLevel) {
// Lock levels that are not unlocked yet
    btn.classList.add("locked");
    btn.disabled = true;
    btn.textContent += " 🔒";
  } else {

//LEVEL CLICK EVENT
    btn.addEventListener("click", () => {
//Save selected level
      localStorage.setItem("selectedLevel", i);
//Go to game page
      window.location.href = "game.html";
    });
  }
// Add button to container
  levelsContainer.appendChild(btn);
}
//BACK BUTTON
backBtn.addEventListener("click", () => {
//Go back to bird selection page
  window.location.href = "select-bird.html";
});
