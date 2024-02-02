function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

document.addEventListener('DOMContentLoaded', function () {
  var body = document.body;
  var colorSpan = document.querySelector('.color');
  var changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', function() {
  var randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;

  colorSpan.textContent = randomColor;
});
});