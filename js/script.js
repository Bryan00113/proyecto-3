const ul = document.querySelector(".nav__ul");
const ulNesting1 = document.querySelector(".nav__nesting1 ");
const ulNesting2 = document.querySelector(".nav__nesting2 ");
const menu = document.querySelector(".icono__main");

document.querySelector(".link1").addEventListener("click", function () {
  ulNesting1.classList.toggle("activo");
});
document.querySelector(".link2").addEventListener("click", function () {
  ulNesting2.classList.toggle("activo");
});

document.querySelector(".icono__main").addEventListener("click", () => {
  ul.classList.toggle("activo");
});
