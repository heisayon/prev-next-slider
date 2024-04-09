let names = [
  "Zion",
  "Uduakobong",
  "Asukwo",
  "Wisdom",
  "Kingsley",
  "Inyangette",
];
const submit = document.getElementById("submit");
const div = document.getElementById("div");
const prev = document.getElementById("previous");
// for (let index = 0; index < Array.from(names).length; index++) {
//   const element = Array.from(names)[index];
//   console.log(element.textContent);
// }
let number = 0;
div.textContent = names[0];
function increaseCount() {
  if (number < names.length - 1) {
    number++;
    div.textContent = names[number];
  }
}
submit.addEventListener("click", () => {
  increaseCount();
});
prev.addEventListener("click", () => {
  reduceCount();
});

function reduceCount() {
  if (!number <= 0) {
    number--;
    div.textContent = names[number];
  }
}
