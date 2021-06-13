let container = document.getElementById("container");
let colors = ["#f35588", "#05dfd7", "#a3f7bf", "#fff591", "#9672F3"];
let SQUARE_NR = 700;

// mouseover events
for (let i = 0; i < SQUARE_NR; i++) {
  let square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColorTo(square);
  });

  square.addEventListener("mouseout", () => {
    removeColorFrom(square);
  });

  container.appendChild(square);
}
// randomizer
function setColor(element) {
  let color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#252a2b";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
