function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = ""; // Clear previous boxes

  for (let i = 0; i < amount; i++) {
    const boxSize = 30 + i * 10; // Increase size by 10 pixels for each box
    const boxColor = getRandomHexColor();

    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = boxColor;

    boxesContainer.appendChild(box);
  }
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const input = document.querySelector("input[type='number']");

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

destroyButton.addEventListener("click", () => {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";
});

