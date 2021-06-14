const container = document.getElementById("container");
const colors = ["#f35588", "#05dfd7", "#a3f7bf", "#fff591", "#9672F3"];
const SQUARES_NR = 400;

for (let i = 0; i < SQUARES_NR; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColorToEl(square);
  });

  square.addEventListener("mouseout", () => {
    removeColorFromEl(square);
  });

  container.appendChild(square);
}

function setColorToEl(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColorFromEl(element) {
  element.style.background = "#444444";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
