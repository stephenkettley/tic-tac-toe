const selectBox = document.querySelector(".select-box");
const selectXBtn = selectBox.querySelector(".playerX");
const selectOBtn = selectBox.querySelector(".playerO");
const playBoard = document.querySelector(".play-board");
const allBox = document.querySelectorAll("section span");
const players = document.querySelector(".players");

window.onload = () => {
  for (let i = 0; i < allBox.length; i++) {
    allBox[i].setAttribute("onclick", "clickedBox(this)"); // add onclick attribute to all available section's spans
  }
  selectXBtn.onclick = () => {
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
  };

  selectOBtn.onclick = () => {
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
    players.setAttribute("class", "players active player");
  };
};

// user click function
function clickedBox(element) {
  if (players.classList.contains("player")) {
    element.innerHTML = `<i class="fa-solid fa-o"></i>`;
    players.classList.add("active");
  } else {
    element.innerHTML = `<i class="fa-solid fa-x"></i>`;
    players.classList.add("active");
  }
  element.style.pointerEvents = "none"; // box can't be clicked multiple times

  bot();
}

// bot click function
function bot() {
  let array = [];
  for (let i = 0; i < allBox.length; i++) {
    if (allBox[i].childElementCount == 0) {
      array.push(i);
    }
  }
  let randomBox = array[Math.floor(Math.random() * array.length)];
  if (array.length > 0) {
    if (players.classList.contains("player")) {
      allBox[randomBox].innerHTML = `<i class="fa-solid fa-x"></i>`;
      players.classList.add("active");
    } else {
      allBox[randomBox].innerHTML = `<i class="fa-solid fa-o"></i>`;
      players.classList.add("active");
    }
  }
}
