// SECRET CODE  ---------------------------------------------------------
const SECRET_CODE = 2359;

// DOMS ELEMENTS  ---------------------------------------------------------
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", handleCheck);

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", showGame);

const backToGameButton = document.getElementById("backToGameButton");
backToGameButton.addEventListener("click", showGame);

const passwordInput = document.getElementById("passwordInput");

// FUNCTIONS ---------------------------------------------------------

// Hide a given element
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

function showGame() {
  hide(lostView);
  hide(wonView);
  show(passwordView);
  window.location.reload();
}

function showWin() {
  hide(passwordView);
  hide(lostView);
  show(wonView);
}
function showLost() {
  hide(passwordView);
  hide(wonView);
  show(lostView);
}

function handleCheck() {
  const passwordEntered = passwordInput.value;
  passwordInput.value = "";

  if (passwordEntered == SECRET_CODE) {
    showWin();
  } else {
    showLost();
  }
}

window.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    handleCheck();
  }
})