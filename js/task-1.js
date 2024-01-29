const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((el) => {
  console.log(el.firstElementChild.textContent);
  console.log(el.lastElementChild.childElementCount);
});