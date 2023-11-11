const ul = document.querySelector(".nav__ul");
const ulNesting1 = document.querySelector(".nav__nesting1 ");
const ulNesting2 = document.querySelector(".nav__nesting2 ");
const ulNesting = document.querySelector(".nav__nesting");
const buycart = document.querySelector(".buy__cart");
// const menu = document.querySelector(".icono__main");

document.querySelector(".icon__main").addEventListener("click", () => {
  ul.classList.toggle("activo");
});
document.querySelector(".icon__close").addEventListener("click", () => {
  ul.classList.toggle("activo");
});
document.querySelector(".icon__cart").addEventListener("click", () => {
  buycart.classList.toggle("activo");
});

document.querySelector(".link1").addEventListener("click", function () {
  ulNesting1.classList.toggle("activo");
});
document.querySelector(".link2").addEventListener("click", function () {
  ulNesting2.classList.toggle("activo");
});

// function abrirMenu(e) {
//   if (e.target.contains(".nav__links")) {
//     ulNesting.classList.toggle("activo");
//   }
//   console.log(`Has dado click en ${e.target}`);
// }
// ul.addEventListener("click", abrirMenu);
