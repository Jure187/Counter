// let p = document.querySelector("p");
// let decrease = document.querySelector(".decrease");
// let reset = document.querySelector(".reset");
// let increase = document.querySelector(".increase");

// let broj = 0;

// decrease.addEventListener("click", function () {
//   broj--;
//   p.textContent = broj;
//   if (broj < 0) {
//     p.style.color = "red";
//   }
// });

// increase.addEventListener("click", function () {
//   broj++;
//   p.textContent = broj;
//   if (broj > 0) {
//     p.style.color = "green";
//   }
// });

// reset.addEventListener("click", function () {
//   broj = 0;
//   p.textContent = broj;
//   p.style.color = "black";
// });

let p = document.querySelector("p");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");
let btn = document.querySelectorAll(".btn");

let broj = 0;

btn.forEach((btns) => {
  btns.addEventListener("click", function (eventPointer) {
    const classList = eventPointer.currentTarget.classList;

    if (classList.contains("decrease")) {
      broj--;
    } else if (classList.contains("increase")) {
      broj++;
    } else {
      broj = 0;
    }
    p.textContent = broj;
    if (broj > 0) {
      p.style.color = "green";
    } else if (broj < 0) {
      p.style.color = "red";
    } else {
      p.style.color = "black";
    }
  });
});
