//codigo Menu
const ul = document.querySelector(".nav__container"),
  main = document.querySelector(".icon__main"),
  mainClose = document.querySelector(".icon__close");
menuDesbordable = document.querySelector(".nav__ul");

cargarEventListeners();
function cargarEventListeners() {
  ul.addEventListener("click", navegacion);
}

function navegacion(e) {
  e.preventDefault();

  if (e.target.classList.contains("icon__main")) {
    menuDesbordable.classList.add("activo");
  } else if (e.target.classList.contains("icon__close")) {
    menuDesbordable.classList.remove("activo");
  }
}

const carrito = document.querySelector("#carrito"),
  listaProductos = document.querySelector(" #listProducts"),
  contenedorCarrito = document.querySelector(" .cart__box"),
  vaciarCarritoBtn = document.querySelector(" #vaciar__carrito");
let agregaralCarrito = [];

document.querySelector(".icon__cart").addEventListener("click", () => {
  carrito.classList.toggle("activo");
});

//Agregando al carrito
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeCartButtons = document.getElementsByClassName("cart__remove");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  var quantityInputs = document.getElementsByClassName("cart__quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[1];
    input.addEventListener("change", quantityChanged);
  }
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateCartTotal();
}

//quantity changed

function updateTotal() {
  var cartContent = document.getElementsByClassName("cart__content");
  [0];
  var cartBox = document.getElementsByClassName("cart__box");
  for (var i = 0; i < cartBox.length; i++) {
    var cartBox = cartBoxes[i];
    var princeElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart__quantity")[0];
    var price = parseFloat(princeElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
    document.getElementsByClassName("total__price")[0].innerText = "$" + total;
  }
}

// Making function
/*
function ready() {

  // Remove items From cart

  var(removeCartButtons= document.getElementsByClassName("cart__remore")


}*/
